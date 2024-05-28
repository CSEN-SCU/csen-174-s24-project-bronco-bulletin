import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "../Post";
import "./styles/board.css";

const Content = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://csen-174-s24-project-bronco-bulletin.onrender.com/posts', {
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    }).then( 
      response => {
        setPosts(response.data.posts); 
      } 
    ).catch(error => { 
      console.error(error); 
    })
  });

  const Posts = posts.map((post, idx) => <Post key={idx} banner={post.banner} title={post.title} tags={post.tags} description={post.description} />);

	return (
		<div className="board">
			<div className="container">
        { Posts }
      </div>
		</div>
	);
};

export default Content;