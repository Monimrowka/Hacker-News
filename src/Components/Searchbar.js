import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Searchbar () {

    const [searchPosts, setSearchPosts] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const url = "http://hn.algolia.com/api/v1/search?query="+searchInput

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setSearchPosts(response.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

console.log(url)

  const handleOnChange = ((event) => {
    setSearchInput(event.target.value)
    console.log(event.target.value)
  })

  console.log(searchInput)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchPosts(searchPosts)
    console.log(searchPosts)
  }

  console.log(searchInput)


    return (
        <>
            <form className="d-flex searchbar" role="search" onSubmit={handleSubmit}>
                <input className="form-control me-2" onChange={handleOnChange} type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
            <div>
            {searchPosts?.map((searchPost) => {
                return <div>{searchPost.title}</div>
            })}
            </div>
        </>
    )
}