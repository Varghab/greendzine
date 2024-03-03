import { useState } from 'react';
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard';

function App() {
  const [isValidated, setIsValidated] = useState(false);
  return (
    <div className='main'>
      {!isValidated?
      <Login setIsValidated={setIsValidated} />
      :
      <Dashboard />}
    </div>
  )
}

export default App
