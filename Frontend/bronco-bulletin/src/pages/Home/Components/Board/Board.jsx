import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "../Post";
import "./styles/board.css";
import { useSearchParams } from "react-router-dom";

const Content = () => {
  const [posts, setPosts] = useState([]);
  const [filterParams, setSearchParams] = useSearchParams();
  filterParams.get("filter");

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

  const Posts = posts.filter((post) => {
    const filter = filterParams.get("filter");
    if (!filter)
      return true;
    
    return post.tags.includes(filter);
  }).map((post, idx) => <Post key={idx} banner={post.image} title={post.title} tags={post.tags} description={post.description} />);

	return (
		<div className="board">
			<div className="container">
        <div className="row">
          { Posts }
        </div>
      </div>
		</div>
	);
};

export default Content;