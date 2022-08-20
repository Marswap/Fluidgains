import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid mx-4">
          <a class="navbar-brand" href>
            FluidGains
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item mx-3">
                <a class="nav-link" aria-current="page" href>
                  About
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" aria-current="page" href>
                  Key Features
                </a>
              </li>

              <li class="nav-item mx-3">
                <a class="nav-link" aria-current="page" href>
                  Team
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" aria-current="page" href>
                  Contact
                </a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item mx-2">
                <a class="btn glow-on-hover" aria-current="page" href>
                  Early Access
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
