import React from "react";
import coin from "../../assets/partners/coin.png";
import "./Features.css";
const Features = () => {
  return (
    <div>
      <div className="container" id="features">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Key Features</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 my-auto">
            <p className="feature-list">
              • Universal Crypto Derivatives Aggregator{" "}
            </p>
            <p className="feature-list">
              • Guaranteed Best APYs and Preferred Sharpe Ratios
            </p>
            <p className="feature-list">
              • Matchmaking Automated Yield Discovery based on your Risk-Return
              profile
            </p>
            <p className="feature-list">
              • Censorship resistant Decentralized Peer-to-Peer Crypto
              Derivatives
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img className="img-fluid" src={coin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
