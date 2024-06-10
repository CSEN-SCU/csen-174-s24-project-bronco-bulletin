import React from "react";
import { auth, googleProvider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';  // Import the method here
import { Link } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  const handleLogin = async () => {
    console.log("Login button clicked");
    try {
      const result = await signInWithPopup(auth, googleProvider);
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
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <Link className="logo navbar-brand navbar mx-2" to="/">
          Bronco Bulletin
        </Link>
      </nav>
    </header>
  );
};

export default Header;
