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
              <Link to="/?filter=events">Events</Link>
            </li>
            <li>
              <Link to="/?filter=clubs">Clubs</Link>
            </li>
            <li>
              <Link to="/?filter=activities">Activities</Link>
            </li>
            <li>
              <Link to="/?filter=tutors">Tutors</Link>
            </li>
            <li>
              <Link to="/?filter=misc">Misc.</Link>
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