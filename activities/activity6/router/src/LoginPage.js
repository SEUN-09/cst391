import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    props.onClick(navigate, from);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login Page</h2>
      <p>You must log in to access that page.</p>
      <p>Click the button below to log in.</p>
      <button className="btn btn-primary" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
};

export default LoginPage;