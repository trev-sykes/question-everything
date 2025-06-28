import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Dashboard } from './dashboard/Dashboard'

function App() {

  return (
    <Router>
      <Dashboard />
    </Router>
  )
}

export default App
