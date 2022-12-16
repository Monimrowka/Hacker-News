import React from 'react'
// import data from "../data.json"
import { useState, useEffect } from "react";
import axios from "axios";
import Article from './Article';



export default function ArticlesList({ postsFrontPage, setPostsFrontPage, setLoading, loading }) {
 
  useEffect(() => {
  axios
  .get("http://hn.algolia.com/api/v1/search?tags=front_page")
  .then((response) => {
  setPostsFrontPage(response.data.hits)
  setLoading(true)
  })
  .catch((error) => {
  console.log(error);
  });
}, [])

 
      return ( 
        <div className="mainposts">   
          {loading ? ( 
              <div className="postsFrontPage"> 

                  {postsFrontPage?.map((post) => {
                      return <Article key={post.objectID} post={post} />
                      })} 
              </div>) 
              : 
              (<div className="d-flex justify-content-center">
              <button className="btn btn-primary p-3" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
              </div>)
            }
        </div> 
      )
  }
