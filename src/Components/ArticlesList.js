import React from 'react'
// import data from "../data.json"
import { useState, useEffect } from "react";
import axios from "axios";
import Article from './Article';
import Navbar from './Navbar';
import Searchbar from './Searchbar';


export default function ArticlesList({postsFrontPage, setPostsFrontPage}) {


  useEffect(() => {
  axios.get("http://hn.algolia.com/api/v1/search?tags=front_page")
  .then((response) => {
  setPostsFrontPage(response.data.hits)
  console.log(response)
  })
  .catch((error) => {
  console.log(error);
  });
}, [])

 
      return ( 
        <>   
          
             <div className="postsFrontPage">
                {postsFrontPage?.map((post) => {
                    return <Article post={post} />
                  })}
        </div>
        </> 
      )
        }
