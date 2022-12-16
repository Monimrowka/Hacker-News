import './App.css';
import React from "react";
// import data from "./data.json"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ArticlesList from './Components/ArticlesList';
import { useState, useEffect } from "react"
import Searchbar  from './Components/Searchbar';


function App() {

  const [postsFrontPage, setPostsFrontPage] = useState([]);
  const [loading, setLoading] = useState(false);



  return (
    <>
    <Navbar setPostsFrontPage={setPostsFrontPage} setLoading={setLoading}/>
    <Searchbar setPostsFrontPage={setPostsFrontPage} loading={loading} setLoading={setLoading}/>
    <ArticlesList postsFrontPage={postsFrontPage} setPostsFrontPage={setPostsFrontPage}  loading={loading} setLoading={setLoading}/>
    <Footer />
    </>
  );
}

export default App;

// Clirim: Pagination
// Monika: no news match
// Candy: spinner
// Artur: error alert
