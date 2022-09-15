import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import "./Features.css";
const Features = () => {
  return (
    <div
      style={{ backgroundColor: "rgb(15, 15, 18)" }}
      className="features-background"
    >
      <div className="container-fluid" id="features">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-md-12 col-lg-8" style={{ paddingBottom: "10vh" }}>
            <p className="top-banner-small-header mb-0 ms-3">02</p>
            <h1 className="top-banner-large-header">
              A Crypto Protocol From Future
              <span style={{ color: "#4628ff" }}>.</span>
            </h1>
            <p className="top-banner-para">Some of our key features are :-</p>
            <p className="feature-list">
              <CheckOutlined style={{ fontSize: "40px" }} />{" "}
              <span className="ms-3">
                Universal Crypto Derivatives Aggregator{" "}
              </span>
            </p>
            <p className="feature-list">
              {" "}
              <CheckOutlined style={{ fontSize: "40px" }} />{" "}
              <span className="ms-3">
                Guaranteed Best APYs and Preferred Sharpe Ratios
              </span>
            </p>
            <p className="feature-list">
              {" "}
              <CheckOutlined style={{ fontSize: "40px" }} />{" "}
              <span className="ms-3">
                {" "}
                Matchmaking Automated Yield Discovery based on your Your
                Risk-Return Profile
              </span>
            </p>
            <p className="feature-list">
              <CheckOutlined style={{ fontSize: "40px" }} />{" "}
              <span className="ms-3">
                {" "}
                Censorship resistant Decentralized Peer-to-Peer Crypto
                Derivatives
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
