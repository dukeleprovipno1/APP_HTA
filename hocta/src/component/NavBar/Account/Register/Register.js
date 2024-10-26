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
        const { username, email, password, confirmPassword } = this.state;

        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f5f5f5',
            }}>
                <div style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    width: '400px',
                }}>
                    <h2 className="text-center">Create Account</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder="Your Name"
                                value={username}
                                onChange={this.handleChange}
                                required
                                style={{ borderRadius: '20px', padding: '10px' }}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={this.handleChange}
                                required
                                style={{ borderRadius: '20px', padding: '10px' }}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={this.handleChange}
                                required
                                style={{ borderRadius: '20px', padding: '10px' }}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                name="confirmPassword"
                                placeholder="Repeat your password"
                                value={confirmPassword}
                                onChange={this.handleChange}
                                required
                                style={{ borderRadius: '20px', padding: '10px' }}
                            />
                        </div>
                        <div className="form-check mb-3">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="termsCheck"
                                required
                            />
                            <label className="form-check-label" htmlFor="termsCheck">
                                I agree to all statements in <a href="/terms-of-service">Terms of service</a>
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100" style={{
                            backgroundColor: '#00d1ff',
                            border: 'none',
                            borderRadius: '20px',
                        }}>Sign Up</button>
                    </form>
                    <p className="text-center mt-3">
                        Have already an account? <a href="/login">Login here</a>
                    </p>
                </div>
            </div>
        );
    }
}
