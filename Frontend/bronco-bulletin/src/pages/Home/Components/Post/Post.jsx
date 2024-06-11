import React from "react";
import "./styles/post.css";

const Post = ({ banner, title, description }) => {
  return (
    <a href={banner} target="_blank" rel="noopener noreferrer" className="card-link">
      <div className="item card shadow p-3 mt-3 mb-3 bg-white rounded">
        <img className="card-img-top img rounded" src={banner} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title h6 text-md">{title}</h5>
          <p className="card-text text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Post;
