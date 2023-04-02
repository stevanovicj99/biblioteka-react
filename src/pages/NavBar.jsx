import React from "react";
import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";

function NavBar({ numberOfRentedBooks }) {
  return (
    <nav className="navBar">
      <Link to="/" className="site-title">
        Library
      </Link>
      <ul>
        <li className="nav-item">
          <Link to="/about" className="item">
            About us
          </Link>
        </li>
        <Link to="/rent" className="rent-item">
          <>
            <BsBook className="rent-icon" />
            <span className="num-books">{numberOfRentedBooks}</span>
          </>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
