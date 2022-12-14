import React from "react";
import logo from "../../assets/img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container pt-1 ps-2">
          <a href="/" className="d-flex">
            <img
              src={logo}
              className="img-fluid"
              alt=""
              height="60"
              width="45"
            />
            <p className="logo-name p-0">LUID GAINS</p>
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
            <span class="navbar-toggler-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                fill="white"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mt-3">
              <li class="nav-item mx-3">
                <a class="nav-link" aria-current="page" href="/#about">
                  About
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" aria-current="page" href="/#features">
                  Key Features
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" aria-current="page" href="/#partners">
                  Partners
                </a>
              </li>

              <li class="nav-item mx-3">
                <a class="nav-link" aria-current="page" href="/#team">
                  Team
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" aria-current="page" href="/#contact">
                  Contact
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" aria-current="page" href="/vault">
                  Vault
                </a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item mx-2">
                <a class="btn btn-early-access" href="/early-access">
                  Early access
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
