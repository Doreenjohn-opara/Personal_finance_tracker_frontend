import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/AuthPage/Signup';
import Login from './pages/AuthPage/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import MasterLayout from './components/masterLayout/MasterLayout';

const App: React.FC = () => {
  
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<MasterLayout />}>
              <Route path="" element={<Dashboard />} />
            </Route>
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
