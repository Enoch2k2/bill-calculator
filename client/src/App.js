import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/static/Home';
import { UserContext } from './context/userContext';
import Navbar from './components/navigation/Navbar';
import Login from './components/sessions/Login';
import Signup from './components/sessions/Signup';
import Errors from './components/errors/Errors';

const App = () => {
  const { checkSession } = useContext(UserContext);

  useEffect(() => {
    checkSession()
  }, [])

  return <Router>
    <Navbar />
    <Errors />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/signup" element={ <Signup /> } />
    </Routes>
  </Router>
}

export default App;
