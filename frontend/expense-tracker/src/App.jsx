import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate,
} from 'react-router-dom';

import Login from './pages/Auth/Login';
import SighUp from './pages/Auth/SighUp';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';
import UserProvider from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/sighUp" exact element={<SighUp />} /> 
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/expense" exact element={<Expense />} />
        </Routes >
      </Router>
    </div>
    </UserProvider>
  )
}

export default App

const Root = () => {

  //Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  //Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;

}