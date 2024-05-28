import React from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
	return (
		<header>
      <nav className="navbar shadow-sm p-3">
        <Link className="logo navbar-brand navbar mx-2" to="/">
          Bronco Bulletin
        </Link>
      </nav>
		</header>
	);
};

export default Header;
