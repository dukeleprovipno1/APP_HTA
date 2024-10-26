
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Header from './component/NavBar/Header';
import Footer from './component/Footer/Footer';
import Register from './component/NavBar/Account/Register/Register'; // Import component Register
import Login from './component/NavBar/Account/Login/Login';
import Home from './component/NavBar/Home/Home';
import SignedIn from './component/NavBar/Account/SignedIn/SignedIn';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <SignedIn />
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        
        </Routes>
        
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
