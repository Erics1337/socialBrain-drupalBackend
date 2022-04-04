import { createContext, useContext, useReducer, useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { getAuthClient } from '../utils/auth'

// Drupal auth utils
const authClient = getAuthClient()

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const initialState = {
		isLoggedIn: false,
		isLoading: false,
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
					isLoggedIn: true,
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
		dispatch({ type: 'SET_LOADING', payload: true })
		dispatch({
			type: 'SET_IS_LOGGED_IN',
			payload: await authClient.logout(),
		})
	}

	const checkLoggedIn = async () => {
		dispatch({ type: 'SET_LOADING', payload: true })
		try {
			const response = await authClient.isLoggedIn()
			console.log('checkLoggedIn response', response)
			dispatch({
				type: 'SET_IS_LOGGED_IN',
				payload: response,
			})
			dispatch({ type: 'SET_LOADING', payload: false })
			return response
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

function useAuth() {
	return useContext(AuthContext)
}

export const RequireAuth = ({ children }) => {
	// Use this context
	let auth = useAuth()

	const navigate = useNavigate()

	!auth.checkLoggedIn && navigate('/login')

	return children
}

export default AuthContext
