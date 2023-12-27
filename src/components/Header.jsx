import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link>Movie App</Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/listado">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listado">
                  List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorite">
                  Favorite
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Search />
      </nav>
    </header>
  );
}

export default Header;
