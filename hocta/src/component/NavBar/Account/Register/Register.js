import React, { Component } from 'react';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {},
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý đăng ký ở đây
        console.log("Đăng ký:", this.state);
    };

    render() {
        const { username, email, password, confirmPassword, errors } = this.state;

        return (
            <div className="container mt-5">
                <h2 className="text-center">Đăng Ký</h2>
                <form onSubmit={this.handleSubmit} className="bg-light p-4 rounded">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Tên người dùng</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Mật khẩu</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Đăng Ký</button>
                </form>
            </div>
        );
    }
}
