import React from "react";
import banner from "../../assets/img/top-banner.png";
import "./TopBanner.css";
const TopBanner = () => {
  return (
    <div className="top-banner-background" id="#home">
      <div className="container pt-0">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <h1 className="top-banner-heading top-banner-font">
              Privacy-centric defi asset allocation and multichain yield
              optimizer protocol enabling you to boost defi yields based on your
              risk & return profile and Sharpe ratios chosen by yourself.
              Fluidgains is immune to MEV mining bots attempting to steal money
              by frontrunning and backrunning transactions.
            </h1>
            <a className="btn btn-danger mt-3" style={{ width: "200px" }}>
              See App
            </a>
          </div>
          <div className="col-md-12 col-lg-6">
            <img
              src={banner}
              className="img-fluid p-5 pt-0 mx-auto top-banner-img"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        class="custom-shape-divider-bottom-1661019298"
        style={{ position: "relative" }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default TopBanner;
