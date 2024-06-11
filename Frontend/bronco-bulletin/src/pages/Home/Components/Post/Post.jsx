import React from "react";
import "./styles/post.css";

const Post = ({ banner, title, description }) => {
  banner = banner || "https://cdn.vectorstock.com/i/500p/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg";

  return (
    <div className="col-auto">
      <a href={banner} target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="item card shadow p-3 mt-3 mb-3 bg-white rounded">
          <img className="card-img-top img rounded" src={banner} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title h6 text-md">{title}</h5>
            <p className="card-text text-sm">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Post;
