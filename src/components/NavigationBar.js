import React from 'react'

export const NavigationBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand text-light" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link text-light" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="/About">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="/Contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="/Member">Membership</a>
      </li>
      
    </ul>
  </div>
</nav>
);

