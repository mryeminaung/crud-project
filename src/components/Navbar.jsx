import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            API
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/users">
                Users
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
