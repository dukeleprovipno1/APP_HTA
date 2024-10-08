import React, { Component } from 'react';

export default class Learn extends Component {
  render() {
    return (
      <div style={{ display: 'flex', height: '100vh', backgroundColor: '#1F1F1F', color: '#ffffff' }}>
        {/* Sidebar */}
        <div style={{ width: '15%', backgroundColor: '#50ABB2', padding: '20px', boxShadow: '2px 0 5px rgba(0,0,0,0.5)' }}>
          <h2 style={{ color: '#ffffff', fontSize: '24px', marginBottom: '30px' }}>HỌC</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ margin: '15px 0' }}>
              <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px' }}>Học</a>
            </li>
            <li style={{ margin: '15px 0' }}>
              <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px' }}>Phát Âm</a>
            </li>
            <li style={{ margin: '15px 0' }}>
              <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px' }}>Bảng Xếp Hạng</a>
            </li>
            <li style={{ margin: '15px 0' }}>
              <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px' }}>Nhiệm Vụ</a>
            </li>
            <li style={{ margin: '15px 0' }}>
              <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px' }}>Cửa Hàng</a>
            </li>
            <li style={{ margin: '15px 0' }}>
              <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px' }}>Hồ Sơ</a>
            </li>
            <li style={{ margin: '15px 0' }}>
              <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px' }}>Xem Thêm</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '20px' }}>
          <h1 style={{ color: '#50ABB2' }}>Gọi đồ uống</h1>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            <h2>Phần 1, Cửa 1</h2>
            <button style={{ backgroundColor: '#50ABB2', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
              BẮT ĐẦU
            </button>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3 style={{ color: '#50ABB2' }}>Nhiệm vụ hàng ngày</h3>
            <p>Kiếm 10 KN</p>
            <div style={{ backgroundColor: '#e0e0e0', borderRadius: '5px', height: '20px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: '#50ABB2', height: '100%', width: '0%' }}></div> {/* Cập nhật width cho progress */}
            </div>
          </div>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h4>Tạo hồ sơ để lưu tiến trình của bạn!</h4>
            <button style={{ backgroundColor: '#50ABB2', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>
              TẠO HỒ SƠ
            </button>
            <button style={{ backgroundColor: '#007BFF', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
              ĐĂNG NHẬP
            </button>
          </div>
        </div>
      </div>
    );
  }
}
