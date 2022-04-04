import './styles/loaders.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { AuthProvider, RequireAuth } from './context/AuthContext'

export default function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route
					path='/'
					element={
						<RequireAuth>
							<Home />
						</RequireAuth>
					}
				/>
				<Route path='signup' element={<Signup />} />
				<Route path='login' element={<Login />} />
			</Routes>
		</AuthProvider>
	)
}
