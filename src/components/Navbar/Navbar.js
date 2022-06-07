import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdOutlineCreateNewFolder } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="container-fluid shadow">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold text-primary">
            CRUD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item align-middle">
                <Link
                  to="/"
                  className="nav-link active d-flex align-items-center"
                >
                  <AiOutlineUnorderedList style={{ marginRight: 5 }} /> Product
                  List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/create-product"
                  className="nav-link d-flex align-items-center"
                >
                  <MdOutlineCreateNewFolder style={{ marginRight: 5 }} /> Create
                  Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
