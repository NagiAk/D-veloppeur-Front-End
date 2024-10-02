import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage'
import CategoryPage from './pages/CategoryPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem('loggedIn') === 'true';
  });

  const login = () => {
    setLoggedIn(true);
    localStorage.setItem('loggedIn', 'true'); 
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn'); 
  };


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={loggedIn ? <Navigate to="/categories" /> : <LoginPage onLogin={login} />}
        />
        <Route path="/categories" element={loggedIn ? <CategoryPage onLogin={login} logout={logout}/> : <Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
