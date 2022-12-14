import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Searchbar ({setPostsFrontPage, setLoading}) {

const [searchInput, setSearchInput] = useState('');

const url = "http://hn.algolia.com/api/v1/search?query="+searchInput

  const handleOnChange = ((event) => {
    setSearchInput(event.target.value);
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(false)
    axios.get(url)
    .then((response) => {
        setPostsFrontPage(response.data.hits);
        setLoading(true)
        setSearchInput("")
    })
    .catch((err) => {
      alert('The API URL is wrong');
    });
  }


  


    return (
        <>
            <form className="d-flex searchbar" role="search" onSubmit={handleSubmit}>
                <input className="form-control me-2" onChange={handleOnChange} value={searchInput} type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
        </>
    )
}