import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage'
import CategoryPage from './pages/CategoryPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const login = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={loggedIn ? <Navigate to="/categories" /> : <LoginPage onLogin={login} />}
        />
        <Route path="/categories" element={loggedIn ? <CategoryPage onLogin={login}/> : <Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
