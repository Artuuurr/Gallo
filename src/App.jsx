import './App.css'
import Homepage from './components/layout/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Admin from './components/page/admin'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/admin' element={<Admin />} />
					<Route path='/homepage' element={<Homepage />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
