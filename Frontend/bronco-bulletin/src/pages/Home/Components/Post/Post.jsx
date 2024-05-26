import React from "react";
import "./styles/post.css";

const Post = ({banner, title, description}) => {
	return (
		<div className="item card shadow p-3 mt-3 bg-white rounded">
      <img className="card-img-top img rounded" src={banner} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title h6 text-md">{ title }</h5>
        <p className="card-text text-sm">{ description }</p>
      </div>
    </div>
	);
};

export default Post;
