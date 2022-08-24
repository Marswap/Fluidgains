import React from "react";
import aurora from "../../assets/partners/aurora.png";
import eth from "../../assets/partners/eth.png";
import protocal from "../../assets/partners/protocal.png";
import algo from "../../assets/partners/algo.png";
import ens from "../../assets/partners/ens.png";
import syn from "../../assets/partners/syn.png";
import solana from "../../assets/partners/solana.png";
import "./Partners.css";
const Partners = () => {
  return (
    <div>
      <div className="container pt-0" id="partners">
        <div className="row pb-3">
          <div className="col-12 mt-5">
            <h1 className="text-center">Partners</h1>
          </div>
          <div className="my-3">
            <div className="row">
              <div className="col-12 col-md-6">
                <span className="partners-header ">
                  {" "}
                  <img
                    src={aurora}
                    className="img-fluid"
                    alt=""
                    height="50"
                    width="40"
                  />
                  {"  "}
                  Aurora
                </span>
              </div>
              <div className="col-12 col-md-6"></div>

              <div className="col-12 col-md-6">
                Aurora will be benefited by higher usability and adoption as we
                plan to make it one of the first blockchains/platforms where
                Fluidgains will be launched.
              </div>
            </div>
          </div>

          <div className="my-3">
            <div className="row">
              <div className="col-12 col-md-6"></div>
              <div className="col-12 col-md-6">
                <span className="partners-header">zkTech</span>
              </div>
              <div className="col-12 col-md-6"></div>
              <div className="col-12 col-md-6">
                Zero knowledge protocols like Aztec and ZKSK will be benefited
                as we plan implement them to eliminate risks of frontrunner and
                backrunner MEV bots.
              </div>
            </div>
          </div>
          <div className="my-3">
            <div className="col-12 col-md-6">
              <span className="partners-header">Defi</span>
            </div>
            <div className="col-12 col-md-6">
              Defi in general will derive benefits from Fluidgains we as our
              protocol is geared toward bringing sophisticated risk-adjusted
              yield generator and aggregator with a simplified layman-friendly
              risk-return profile matching (such as Sharpe ratio preferences)
              for first time defi investors, yield miners and liquidity
              providers.
            </div>
          </div>
          <div className="my-3">
            <div className="row">
              <div className="col-12 col-md-6"></div>
              <div className="col-12 col-md-6">
                <span className="partners-header">DAOs</span>
              </div>
              <div className="col-12 col-md-6"></div>
              <div className="col-12 col-md-6">
                Most DAO tokens will derive benefits from Fluidgains due to
                increased broader investors' demands for their protocol tokens
                as Fluidgains will feature staking as a one of the ways to
                generate yields.
              </div>
            </div>
          </div>
          <div className="my-3">
            <div className="col-12 col-md-6">
              <span className="partners-header">
                {" "}
                <img
                  src={eth}
                  className="img-fluid"
                  alt=""
                  height="50"
                  width="40"
                />
                {"  "}ETH2.0
              </span>
            </div>
            <div className="col-12 col-md-6">
              ETH2.0 will be benefited by higher usability and adoption as we
              plan to make it one of the first blockchains where Fluidgains will
              be launched.
            </div>
          </div>
          <div className="my-3">
            <div className="row">
              <div className="col-12 col-md-6"></div>
              <div className="col-12 col-md-6">
                <span className="partners-header">
                  {" "}
                  <img
                    src={protocal}
                    className="img-fluid"
                    alt=""
                    height="50"
                    width="40"
                  />
                  {"  "}Protocol Labs
                </span>
              </div>
              <div className="col-12 col-md-6"></div>
              <div className="col-12 col-md-6">
                Protocol Labs will be benefited as we plan to leverage both IPFS
                and Filecoin (their stack) for permanent decentralized data
                storage extensively.
              </div>
            </div>
          </div>
          <div className="my-3">
            <div className="col-12 col-md-6">
              <span className="partners-header">
                {" "}
                <img
                  src={algo}
                  className="img-fluid"
                  alt=""
                  height="50"
                  width="40"
                />
                {"  "}Algorand
              </span>
            </div>
            <div className="col-12 col-md-6">
              Algorand will be benefited by higher usability and adoption as we
              plan to make it one of the first blockchains/platforms where
              Fluidgains will be launched.
            </div>
          </div>
          <div className="my-3">
            <div className="row">
              <div className="col-12 col-md-6"></div>
              <div className="col-12 col-md-6">
                <span className="partners-header">
                  {" "}
                  <img
                    src={ens}
                    className="img-fluid"
                    alt=""
                    height="50"
                    width="40"
                  />
                  {"  "} ENS
                </span>
              </div>
              <div className="col-12 col-md-6"></div>
              <div className="col-12 col-md-6">
                We will be using ENS domain names for mirroring our defi
                protocol web app.
              </div>
            </div>
          </div>
          <div className="my-3">
            <div className="col-12 col-md-6">
              <span className="partners-header">
                {" "}
                <img
                  src={syn}
                  className="img-fluid"
                  alt=""
                  height="50"
                  width="40"
                />
                {"  "}Synthetix
              </span>
            </div>

            <div className="col-12 col-md-6">
              Fluidgins will employ 5x, 10x and 25x leveraged derivatives of
              Synthetix/Kwenta to boost yields for its users/investors and
              liquidity providers.
            </div>
          </div>
          <div className="my-3">
            <div className="row">
              <div className="col-12 col-md-6"></div>
              <div className="col-12 col-md-6">
                <span className="partners-header">
                  {" "}
                  <img
                    src={solana}
                    className="img-fluid"
                    alt=""
                    height="50"
                    width="40"
                  />
                  {"  "}Solana
                </span>
              </div>
              <div className="col-12 col-md-6"></div>
              <div className="col-12 col-md-6">
                Solana will be benefited by higher usability and adoption as we
                plan to make it one of the first blockchains where Fluidgains
                will be launched.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
