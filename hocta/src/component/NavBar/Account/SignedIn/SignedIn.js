import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './imgg/2.png';
import './SignedIn.css';

export default class SignedIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProfileBox: false,
            searchText: ""
        };
    }

    toggleProfileBox = () => {
        this.setState({ showProfileBox: !this.state.showProfileBox });
    }

    handleSearchChange = (event) => {
        this.setState({ searchText: event.target.value });
    }

    handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log("Tìm kiếm:", this.state.searchText);
    }

    render() {
        const { showProfileBox, searchText } = this.state;

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#50ABB2' }}>
                    <div className="container px-lg-5 d-flex align-items-center">
                        <img 
                            src={logo} 
                            alt="Logo" 
                            style={{ width: '100px', height: '100px', marginRight: '10px', marginLeft: '10px' }} 
                        />
                        <div style={{ borderRight: '6px solid white', height: '100%', marginRight: '10px' }}></div>

                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                                <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>

                                {/* Thanh Tìm Kiếm */}
                                <li className="nav-item search-bar">
                                    <form className="d-flex" onSubmit={this.handleSearchSubmit}>
                                        <input 
                                            className="form-control search-input" 
                                            type="search" 
                                            placeholder="Tìm kiếm..." 
                                            aria-label="Search" 
                                            value={searchText}
                                            onChange={this.handleSearchChange}
                                        />
                                        <button className="btn btn-outline-light btn-sm" type="submit">Tìm</button>
                                    </form>
                                </li>

                                {/* Nút Trang Hồ Sơ */}
                                <li className="nav-item">
                                    <a 
                                        className="nav-link" 
                                        href="#!" 
                                        onClick={this.toggleProfileBox}
                                    >
                                        Trang Hồ Sơ
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {showProfileBox && (
                    <div className="profile-box">
                        <div className="profile-header">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="User Avatar"
                                className="avatar"
                            />
                            <div className="profile-info">
                                <h4>Kevin Lê</h4>
                                <a href="#!" className="profile-link">Xem tất cả trang cá nhân</a>
                            </div>
                        </div>

                        <ul className="profile-options">
                            <li><a href="#!">Trợ giúp & hỗ trợ</a></li>
                            <li><a href="#!">Màn hình & trợ năng</a></li>
                            <li><a href="#!">Đóng góp ý kiến</a></li>
                            <li><a href="#!">Đăng xuất</a></li>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}
