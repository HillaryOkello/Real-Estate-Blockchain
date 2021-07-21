import React from "react";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">
          BlockChain Real Estate
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <div class="input-group rounded">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search Property..."
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fas fa-search"></i>
                </span>
              </div>
            </li>
          </ul>
          <ul class="d-flex navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-info btn-rounded">
                get started
              </button>
            </li>
            <li class="nav-item mx-2">
              <button
                type="button"
                class="btn btn-outline-dark"
                data-mdb-ripple-color="dark"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
