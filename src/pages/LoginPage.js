import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import welcome from '../assets/welcome.gif'; // Import the .gif file

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!role) {
      alert('Please select a role to proceed.');
      return;
    }

    // Simulate login success
    onLoginSuccess(); // Call the parent handler to update login state

    // Redirect based on role
    switch (role) {
      case 'admin':
        navigate('/admin-dashboard');
        break;
      case 'editor':
        navigate('/editor-dashboard');
        break;
      case 'author':
        navigate('/author-dashboard');
        break;
      case 'visitor':
        navigate('/visitor-dashboard');
        break;
      default:
        alert('Invalid role selection.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="welcome-section">
          <h1>Welcome Back!</h1>
          <p>To stay connected with us, please login with your personal info</p>
          <img src={welcome} alt="Welcome Gif" className="welcome-gif" /> 
        </div>
        <div className="login-section">
          <h2>Welcome</h2>
          <p>Login to your account to continue</p>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <select
              className="role-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="author">Author</option>
              <option value="visitor">Visitor</option>
            </select>
            <a href="/" className="forgot-password">
              Forgot your password?
            </a>
            <button type="submit" className="login-btn">
              Log In
            </button>
          </form>
          <p>
            Don't have an account? <a href="/">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
