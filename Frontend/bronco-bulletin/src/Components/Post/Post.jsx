import React from "react";
import "./styles/post.css";

const Post = ({banner, title, description}) => {
	return (
		<div class="item card shadow p-3 mt-3 bg-white rounded">
      <img class="card-img-top img rounded" src={banner} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title h6 text-md">{ title }</h5>
        <p class="card-text text-sm">{ description }</p>
      </div>
    </div>
	);
};

export default Post;
