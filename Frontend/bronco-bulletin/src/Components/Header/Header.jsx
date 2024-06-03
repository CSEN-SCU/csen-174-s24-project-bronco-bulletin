// src/Components/Header/Header.jsx
import React from "react";
import { auth, googleProvider, signInWithPopup } from '../../firebase';
import "./styles/header.css";

const Header = () => {
  const handleLogin = async () => {
    console.log("Login button clicked");
    try {
      const result = await auth.signInWithPopup(googleProvider);
      console.log('Logged in successfully', result);
      alert('Logged in successfully');
    } catch (error) {
      console.error('Error logging in: ', error);
      alert('Error logging in: ' + error.message);
    }
  };

  return (
    <header>
      <nav className="navbar shadow-sm p-3">
        <a className="logo navbar-brand mx-2" href="/">
          Bronco Bulletin
        </a>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
