import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Dùng Routes thay vì Switch
import Header from './component/NavBar/Header';
import Footer from './component/Footer/Footer';
import Body from './component/Demo/Body';
import Register from './component/NavBar/Account/Register/Register'; // Import component Register

function Home() {
  return (
    <Router>
      <div className="Home">
        <Header />
        <Routes> {/* Dùng Routes thay cho Switch */}
          <Route path="/register" element={<Register />} /> {/* Sử dụng element thay vì component */}
          {/* Bạn có thể thêm các Route khác ở đây */}
        </Routes>
        <Body/>
        <Footer />
      </div>
    </Router>
  );
}

export default Home;
