import { useState, useContext, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form } from 'formik'
import Logo from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import Loader from '../components/Loader'

function Login() {
	const navigate = useNavigate()

	const {
		currentUser,
		isLoggedIn,
		checkLoggedIn,
		isLoading,
		signin,
		signout,
	} = useContext(AuthContext)

	useEffect(() => {
		checkLoggedIn() && navigate('/')
	}, [])

	// Login Form Validation Schema
	const LoginFormSchema = Yup.object().shape({
		// email: Yup.string().email().required('An email is required'),
		username: Yup.string().required('A username is required'),
		password: Yup.string()
			.required()
			.min(6, 'Password must be at least 6 characters long'),
	})

	// Login
	const handleLogin = async (username, password) => {
		console.log('logging in')
		await signin(username, password)
	}

	if (isLoading) {
		return <Loader />
	}

	return (
		<main>
			<div className='h-screen bg-gray-50 flex flex-col justify-center items-center dark:bg-gray-700'>
				<div className='bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3 dark:bg-gray-200'>
					<a className='cursor-pointer' href='/'>
						<img src={Logo} alt='Logo' />
					</a>
					<Formik
						initialValues={{
							// email: '',
							username: '',
							password: '',
						}}
						onSubmit={(values) =>
							handleLogin(values.username, values.password)
						}
						validationSchema={LoginFormSchema}
						validateOnMount={false}>
						<Form className='mt-8 w-64 flex flex-col'>
							<Field
								className='text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none'
								type='text'
								name='username'
								placeholder='Username'
							/>
							<Field
								className='text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none'
								type='password'
								name='password'
								placeholder='Password'
							/>
							<button
								type='submit'
								className='text-sm text-center bg-blue-500 text-white py-1 rounded font-medium'>
								Log In
							</button>
						</Form>
					</Formik>

					{/* Oauth Accounts */}
					{/* <div className='flex justify-evenly space-x-2 w-64 mt-4'>
						<span className='bg-gray-300 h-px flex-grow t-2 relative top-2'></span>
						<span className='flex-none uppercase text-xs text-gray-400 font-semibold'>
							or
						</span>
						<span className='bg-gray-300 h-px flex-grow t-2 relative top-2'></span>
					</div> */}
					{/* <button className='mt-4 flex'>
						<div className='bg-no-repeat facebook-logo mr-1'></div>
						<span className='text-xs text-blue-900 font-semibold'>
							Sign Up with Facebook
						</span>
					</button> */}
					{/* <a className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">Forgot password?</a> */}
				</div>
				<div className='bg-white border border-gray-300 text-center w-80 py-4 dark:bg-gray-200'>
					<span className='text-sm'>Need an account?</span>
					<Link
						to='/signup'
						className='text-blue-500 text-sm font-semibold'>
						{' '}
						Sign Up
					</Link>
				</div>
				{/* <div className='mt-3 text-center dark:text-gray-200'>
					<span className='text-xs'>Get the app</span>
					<div className='flex mt-3 space-x-2'>
						<div className='bg-no-repeat apple-store-logo'></div>
						<div className='bg-no-repeat google-store-logo'></div>
					</div>
				</div> */}
			</div>
		</main>
	)
}

export default Login
