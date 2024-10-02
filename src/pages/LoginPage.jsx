import React from "react";
import { useState } from "react";
import './LoginPage.css'

function LoginPage({onLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "admin") {
            onLogin();
        } else {
            alert("Email ou Password incorrect");
        }
    };
    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
