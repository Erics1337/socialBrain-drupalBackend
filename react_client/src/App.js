import logo from './logo.svg'
import './App.css'
import NodeReadWrite from './components/NodeReadWrite'
import LoginForm from './components/LoginForm'
import NodeListOnly from './components/NodeListOnly'

function App() {
	return (
		<>
			<LoginForm />
			{/* <NodeReadWrite /> */}
			<NodeListOnly />
		</>
	)
}

export default App
