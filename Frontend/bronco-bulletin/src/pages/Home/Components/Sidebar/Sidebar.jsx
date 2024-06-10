import React from "react";
import { Link } from "react-router-dom";
import "./styles/sidebar.css";

const Sidebar = () => {
	return (
    <aside>
      <div className="sidebar">
        <div>
          <h1 className="h4 text-center p-1 m-0">General</h1>
        </div>
        <hr/>
        <div>
          <ul className="text-md">
            <li>
              <Link to="/?filter=Events">Events</Link>
            </li>
            <li>
              <Link to="/?filter=Clubs">Clubs</Link>
            </li>
            <li>
              <Link to="/?filter=Activities">Activities</Link>
            </li>
            <li>
              <Link to="/?filter=Tutoring">Tutors</Link>
            </li>
            <li>
              <Link to="/">Misc.</Link>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <Link role="button" className="btn btn-danger btn-lg active" to="/create">Create Post</Link>
        </div>
      </div>
    </aside>
	);
};

export default Sidebar;