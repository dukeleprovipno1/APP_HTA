import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="py-5" style={{ backgroundColor: '#50ABB2' }}>
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright © Your Website 2023</p>
                </div>
            </footer>
        );
    }
}
