import React from 'react';
import '../App.css'
import {
  Link,
  useLocation
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  let loc=useLocation();
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Kitty</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${(loc.pathname==="/")?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${(loc.pathname==="/about")?"active":""}`} to="/about">About</Link>
        </li>
      </ul>
      <form className="form d-flex" role="search">
      <Link className="btn mx-2"to="/signup"><FontAwesomeIcon icon={faUser} /></Link>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
