import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic đăng nhập tại đây
        console.log("Đăng nhập:", this.state);
    };

    render() {
        const { username, password } = this.state;

        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'linear-gradient(135deg, #F5F5F5)',
            }}>
                <div style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    width: '350px',
                }}>
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder="Type your username"
                                value={username}
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
                                placeholder="Type your password"
                                value={password}
                                onChange={this.handleChange}
                                required
                                style={{ borderRadius: '20px', padding: '10px' }}
                            />
                            <div className="text-right">
                                <a href="/forgot-password" style={{ fontSize: '0.9rem', textDecoration: 'none' }}>Forgot password?</a>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100" style={{
                            background: 'linear-gradient(90deg, #00c6ff, #0072ff)',
                            border: 'none',
                            borderRadius: '20px',
                            padding: '10px',
                        }}>LOGIN</button>
                    </form>

                    <p className="text-center mt-3">Or Sign Up Using</p>
                    <div className="d-flex justify-content-center">
                        <a href="/auth/facebook" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="/auth/twitter" className="social-icon mx-3"><i className="fab fa-twitter"></i></a>
                        <a href="/auth/google" className="social-icon"><i className="fab fa-google"></i></a>
                    </div>

                    <p className="text-center mt-3">
                        Have not account yet? <a href="/signup">SIGN UP</a>
                    </p>
                </div>
            </div>
        );
    }
}
