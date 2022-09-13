import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-background">
      <div className="container" id="about">
        <div className="row">
          <div className="col-12">
            <p className="about-number pb-0 mb-0">03</p>
            <h1 className="text-center about-header">
              What is a Vault <br />
              in DeFi?
            </h1>
          </div>
          <div className="col-12 mt-3 about-para">
            <p>
              In the DeFi space, there are many projects that issue rewards to
              users for interacting with their platforms, one example is
              “staking” tokens on a platform which in turn can increase the
              total locked value for that project. Typically, LP (Liquidity
              Pool) tokens are used for this purpose as many projects issue
              rewards in return for users providing the liquidity needed to make
              the platform run. This is commonly referred to as “yield farming”.
            </p>
            <p>
              Yield farming for an individual with limited funds can be cost
              prohibitive due to high transaction costs for claiming rewards. To
              solve this problem, “yield aggregators” are sets of contracts that
              pool these staked funds together and allow users to optimize their
              yield farming by allowing “vaults” to automatically harvest their
              farming rewards and reinvest them in the liquidity pools,
              resulting in compounded gains. These auto-compounding vaults can
              make it so users with smaller portfolios can take advantage of
              yield farms by depositing into “vaults”, which is the term for the
              auto- compounding contracts. These vaults allow depositors to not
              have to worry about gas fees which maximize the returns they can
              earn on various yield farms.
            </p>
            <p>
              Vaults can range in complexity and risk, with some using single
              asset deposits instead of liquidity pool tokens. Some vaults can
              even utilize more complex strategies that involve multiple
              protocols and transaction types. It is always wise to research the
              exact process a vault is using before depositing any funds into
              one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
