import React from 'react'

export default function navbar() {


  return (
    <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Hacker News</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">new</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">past</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">comments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="a">ask</a>
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
        <form class="d-flex searchbar" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-info" type="submit">Search</button>
      </form>
      </div>
    </div>
  </nav>
  )
}
