import React from "react";
import "./styles/header.css";

const Layout = () => {
	return (
		<header>
      <nav className="navbar shadow-sm p-3">
        <a className="logo navbar-brand navbar mx-2" href="/">
          Bronco Bulletin
        </a>
      </nav>
		</header>
	);
};

export default Layout;
