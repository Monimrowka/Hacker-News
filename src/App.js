import './App.css';
import React from "react";
// import data from "./data.json"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ArticlesList from './Components/ArticlesList';
import { useState } from "react"
import Searchbar  from './Components/Searchbar';


function App() {

  const [postsFrontPage, setPostsFrontPage] = useState([])


  return (
    <>
    <Navbar />
    <Searchbar setPostsFrontPage={setPostsFrontPage} />
    <ArticlesList postsFrontPage={postsFrontPage} setPostsFrontPage={setPostsFrontPage}/>
    <Footer />
    </>
  );
}

export default App;

// Clirim: Pagination
// Monika: no news match
// Candy: spinner
// Artur: error alert
