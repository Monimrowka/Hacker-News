import React from 'react'
// import data from "../data.json"
import { useState, useEffect } from "react";
import axios from "axios";


export default function ArticlesList() {

  const [postsFrontPage, setPostsFrontPage] = useState([])

  useEffect(() => {
  axios.get("http://hn.algolia.com/api/v1/search?tags=front_page")
  .then((response) => {
  console.log(response); 
  setPostsFrontPage(response.data.hits)
  })
  .catch((error) => {
  console.log(error);
  });
}, [])

 
  return <div className="postsFrontPage">
             {postsFrontPage?.map((post) => {
                return ( <div className="post">
                        {post.title} <span className="author">by {post.author}</span>
                        <div className="smallinfo">Created:  {post.created_at} || Nr. of comments: {post.num_comments}</div>
                         </div>
                       )
               })}
    </div>

    }
