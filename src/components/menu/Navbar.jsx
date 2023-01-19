import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./nav.css";
function Navbar() {
  const id=2
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/about/${id}`}>About</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/galery">Gallery</Link>
          </li>
          <li>
            <Link to="/dash">Dashborad</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
