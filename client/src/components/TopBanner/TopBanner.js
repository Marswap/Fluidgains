import React from "react";
import { RightCircleOutlined } from "@ant-design/icons";
import "./TopBanner.css";
const TopBanner = () => {
  return (
    <div className="top-banner-background" id="home">
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 col-lg-10"
            style={{ paddingBottom: "10vh" }}
          >
            <p className="top-banner-small-header mb-0">CRYPTO DEFI APP</p>
            <h1 className="top-banner-large-header">
              Buy and Trade Crypto Derivatives Like Never Before
            </h1>
            <p className="top-banner-para">
              Privacy-centric defi asset allocation and multichain yield
              optimizer protocol enabling you to boost defi yields based on your
              risk & return profile and Sharpe ratios chosen by yourself.
              Fluidgains is immune to MEV mining bots attempting to steal money
              by frontrunning and backrunning transactions.
            </p>
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-3">
                  <a className="btn btn-early-access" href>
                    Get Started
                  </a>
                </div>
                <div className="col-9 top-banner-learn">
                  <p className="mt-2">
                    Learn More About Us
                    <span className="ms-2">
                      {" "}
                      <RightCircleOutlined style={{ fontSize: "50px" }} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
