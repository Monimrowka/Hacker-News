import './App.css';
import React from "react";
// import data from "./data.json"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ArticlesList from './Components/ArticlesList';
import { useState, useEffect } from "react"
import Searchbar  from './Components/Searchbar';
import { Pagination } from './Components/Pagination';

function App() {

  const [postsFrontPage, setPostsFrontPage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage,setPostsPerPage]=useState(10);

 //get current posts
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = postsFrontPage.slice(indexOfFirstPost,indexOfLastPost)
 // change page
 const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
    <Navbar />
    <Searchbar setPostsFrontPage={setPostsFrontPage} loading={loading} setLoading={setLoading}/>
    <ArticlesList postsFrontPage={currentPosts} setPostsFrontPage={setPostsFrontPage}  loading={loading} setLoading={setLoading}/>
    <Pagination postsPerPage={postsPerPage} totalPosts={postsFrontPage.length} paginate={paginate} />
    <Footer />
    </>
  );
}

export default App;

// Clirim: Pagination
// Monika: no news match
// Candy: spinner
// Artur: error alert
