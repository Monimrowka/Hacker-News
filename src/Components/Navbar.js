import React from 'react'
import { useState } from "react";
import axios from "axios";


export default function Navbar({setPostsFrontPage, setLoading }) {


  const handleOnClickNew = (e) => {
    e.preventDefault();
    axios.get("http://hn.algolia.com/api/v1/search_by_date?tags=front_page")
    .then((response) => {
        setPostsFrontPage(response.data.hits);
        setLoading(true)
    })
    .catch((err) => {
      alert('The API URL is wrong');
    });
  }

  const handleOnClickHome = (e) => {
    e.preventDefault();
    axios.get("http://hn.algolia.com/api/v1/search?tags=front_page")
    .then((response) => {
        setPostsFrontPage(response.data.hits);
        setLoading(true)
    })
    .catch((err) => {
      alert('The API URL is wrong');
    });
  }

  const handleOnClickComments = (e) => {
    e.preventDefault();
    axios.get("http://hn.algolia.com/api/v1/search?tags=comment")
    .then((response) => {
        setPostsFrontPage(response.data.hits);
        setLoading(true)
    })
    .catch((err) => {
      alert('The API URL is wrong');
    });
  }

  const handleOnClickAsk = (e) => {
    e.preventDefault();
    axios.get("http://h.algolia.com/api/v1/search_by_date?tags=front_page")
    .then((response) => {
        setPostsFrontPage(response.data.hits);
        setLoading(true)
    })
    .catch((err) => {
      alert('The API URL is wrong');
    });
  }


  return (
    <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="home" onClick={handleOnClickHome}>Hacker News</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="new" onClick={handleOnClickNew}>new</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">past</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="comments" onClick={handleOnClickComments} >comments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="ask"  onClick={handleOnClickAsk}>ask</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="a">show</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="a">jobs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="a">submit</a>
          </li>
        </ul>
 
      </div>
    </div>
  </nav>
  )
}
