import React, { Component } from 'react';

import logo from '../../img/1.png';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#50ABB2' }}>
                    <div className="container px-lg-5 d-flex align-items-center">
                        <img 
                            src={logo} 
                            alt="Logo" 
                            style={{ width: '100px', height: '100px', marginRight: '10px', marginLeft: '10px' }} 
                        />
                        {/* Đường kẻ dọc */}
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
                                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
                                {/* Nút Đăng nhập */}
                                <li className="nav-item"><a className="nav-link" href="#!">Đăng nhập</a></li>
                                {/* Nút Đăng ký */}
                                <li className="nav-item"><a className="nav-link" href="Account/Register">Đăng ký</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
