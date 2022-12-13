import './App.css';
import React from "react";
import data from "./data.json"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ArticlesList from './Components/ArticlesList';
import { useState } from "react"


function App() {


  return (
    <>
    <Navbar />
    <ArticlesList />
    <Footer />
    </>
  );
}

export default App;
