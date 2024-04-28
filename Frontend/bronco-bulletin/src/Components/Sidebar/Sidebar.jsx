import React from "react";
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
              <a href="/?filter=events">Events</a>
            </li>
            <li>
              <a href="/?filter=clubs">Clubs</a>
            </li>
            <li>
              <a href="/?filter=activities">Activities</a>
            </li>
            <li>
              <a href="/?filter=tutors">Tutors</a>
            </li>
            <li>
              <a href="/?filter=misc">Misc.</a>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <a role="button" class="btn btn-danger btn-lg active" href="/create">Create Post</a>
        </div>
      </div>
    </aside>
	);
};

export default Sidebar;