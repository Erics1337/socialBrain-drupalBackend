import { createContext, useContext, useReducer, useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { getAuthClient } from '../utils/auth'

// Drupal auth utils
const authClient = getAuthClient()

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate()

	const initialState = {
		isLoggedIn: false,
		isLoading: true,
		currentUser: {},
	}
	/* Reducer */
	const AuthReducer = (state, action) => {
		switch (action.type) {
			case 'SET_LOADING':
				return {
					...state,
					isLoading: action.payload,
				}
			case 'SET_IS_LOGGED_IN':
				console.log(
					'Setting SET_IS_LOGGED_IN from reducer',
					action.payload
				)
				return {
					...state,
					isLoggedIn: action.payload,
				}
			case 'SET_CURRENT_USER':
				return {
					...state,
					currentUser: action.payload,
				}
			case 'SET_CURRENT_GROUP':
				console.log('Setting currentGroup from reducer', action.payload)
				return {
					...state,
					currentGroup: action.payload,
				}
			default:
				return state
		}
	}
	const [state, dispatch] = useReducer(AuthReducer, initialState)

	const signin = async (username, password) => {
		dispatch({ type: 'SET_LOADING', payload: true })
		try {
			await authClient.login(username, password)
			navigate('/')
			dispatch({
				type: 'SET_IS_LOGGED_IN',
				payload: await authClient.isLoggedIn(),
			})
		} catch (error) {
			console.log('error', error)
		}
		dispatch({ type: 'SET_LOADING', payload: false })
	}

	const signout = async () => {
		try {
			dispatch({ type: 'SET_LOADING', payload: true })
			await authClient.logout()
			dispatch({
				type: 'SET_IS_LOGGED_IN',
				payload: false,
			})
		} catch (error) {
			console.log('error', error)
		}
		dispatch({ type: 'SET_LOADING', payload: false })
	}

	const checkLoggedIn = async (loggedIn, navigateTo) => {
		dispatch({ type: 'SET_LOADING', payload: true })
		try {
			authClient
				.isLoggedIn()
				.then((response) => {
					console.log('checkLoggedIn response', response)
					response === loggedIn && navigate(`${navigateTo}`)
					dispatch({
						type: 'SET_IS_LOGGED_IN',
						payload: response,
					})
					dispatch({ type: 'SET_LOADING', payload: false })
				})
				.catch(() => {
					console.log('checkLoggedIn error')
					dispatch({
						type: 'SET_IS_LOGGED_IN',
						payload: false,
					})
					dispatch({ type: 'SET_LOADING', payload: false })
				})
		} catch (error) {
			console.log('error', error)
			dispatch({ type: 'SET_LOADING', payload: false })
		}
	}

	return (
		<AuthContext.Provider
			value={{ ...state, signin, signout, checkLoggedIn }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
