import React from "react";
import Footer from "../../components/Footer/Footer";
import "./Vault.css";
const Vault = () => {
  return (
    <div className="vault-background">
      <div className="vault-main-box mt-5 pt-5">
        <div className="vault-buttonGroup">
          <button className="button mx-4" type="button">
            All Vaults
          </button>
          <button className="button mx-4" type="button">
            Eligible Vaults
          </button>
          <button className="button mx-4" type="button">
            My Vaults
          </button>
          <button className="button mx-4" type="button">
            Vesting{" "}
          </button>
        </div>

        <div className="assets-info-box">
          <div>
            <h2 className="vault-heading">
              Assets under management:
              <span className="vault-heading-value"> $1,831,662+</span>
            </h2>
          </div>
          <div>
            <h2 className="vault-heading">
              Total Value Locked:
              <span className="vault-heading-value"> $2,931,658+</span>
            </h2>
          </div>
        </div>

        <div className="data-tables">
          <h1 className="vault-table-heading">Options Vaults</h1>

          <div className="box_">
            <div className="col1">
              <div className="col-name">
                <h3 className="vault-table-subheading">NAME</h3>
              </div>
              <div>
                <h5 className="vault-data">DUST</h5>
              </div>
              <div>
                <h5 className="vault-data">SOL</h5>
              </div>
              <div>
                <h5 className="vault-data">stSOL</h5>
              </div>
              <div>
                <h5 className="vault-data">BTC USDC</h5>
              </div>
              <div>
                <h5 className="vault-data">BTC</h5>
              </div>
              <div>
                <h5 className="vault-data">ETH</h5>
              </div>
              <div>
                <h5 className="vault-data">SOL USDC</h5>
              </div>
              <div>
                <h5 className="vault-data">scnSOL</h5>
              </div>
              <div>
                <h5 className="vault-data">SRM</h5>
              </div>
            </div>
            <div className="apy">
              <div className="col-name">
                <h3 className="vault-table-subheading">APY</h3>
              </div>
              <div>
                <h5 className="vault-data">23%</h5>
              </div>
              <div>
                <h5 className="vault-data">33%</h5>
              </div>
              <div>
                <h5 className="vault-data">23%</h5>
              </div>
              <div>
                <h5 className="vault-data">24%</h5>
              </div>
              <div>
                <h5 className="vault-data">13%</h5>
              </div>
              <div>
                <h5 className="vault-data">3%</h5>
              </div>
              <div>
                <h5 className="vault-data">23%</h5>
              </div>
              <div>
                <h5 className="vault-data">27%</h5>
              </div>
              <div>
                <h5 className="vault-data">11%</h5>
              </div>
            </div>
            <div className="sharpe-ratio">
              <div className="col-name">
                <h3 className="vault-table-subheading">SHARPE RATIO</h3>
              </div>
              <div>
                <h5 className="vault-data">2</h5>
              </div>
              <div>
                <h5 className="vault-data">3.4</h5>
              </div>
              <div>
                <h5 className="vault-data">1.2</h5>
              </div>
              <div>
                <h5 className="vault-data">1.45</h5>
              </div>
              <div>
                <h5 className="vault-data">2.2</h5>
              </div>
              <div>
                <h5 className="vault-data">6</h5>
              </div>
              <div>
                <h5 className="vault-data">2.3</h5>
              </div>
              <div>
                <h5 className="vault-data">3.7</h5>
              </div>
              <div>
                <h5 className="vault-data">1</h5>
              </div>
            </div>
            <div className="tvl">
              <div className="col-name">
                <h3 className="vault-table-subheading">TVL</h3>
              </div>
              <div>
                <h5 className="vault-data">$2300</h5>
              </div>
              <div>
                <h5 className="vault-data">$3300</h5>
              </div>
              <div>
                <h5 className="vault-data">$2039</h5>
              </div>
              <div>
                <h5 className="vault-data">$6700</h5>
              </div>
              <div>
                <h5 className="vault-data">$3000</h5>
              </div>
              <div>
                <h5 className="vault-data">$7100</h5>
              </div>
              <div>
                <h5 className="vault-data">$6100</h5>
              </div>
              <div>
                <h5 className="vault-data">$3100</h5>
              </div>
              <div>
                <h5 className="vault-data">$3200</h5>
              </div>
            </div>
          </div>
          <h1 className="vault-table-heading">Swaps Vaults</h1>
          <div className="box_">
            <div className="col1">
              <div className="col-name">
                <h3 className="vault-table-subheading">NAME</h3>
              </div>
              <div>
                <h5 className="vault-data">BTC Perpetual</h5>
              </div>
              <div>
                <h5 className="vault-data">ETH Perpetual</h5>
              </div>
              <div>
                <h5 className="vault-data">ADA Perpetual</h5>
              </div>
              <div>
                <h5 className="vault-data">SOL Perpetual</h5>
              </div>
              <div>
                <h5 className="vault-data">DOGE Perpetual</h5>
              </div>
              <div>
                <h5 className="vault-data">DOT Perpatual</h5>
              </div>
              <div>
                <h5 className="vault-data">TRX Perpetual</h5>
              </div>
              <div>
                <h5 className="vault-data">AVAX Perpetual</h5>
              </div>
              <div>
                <h5 className="vault-data">NEAR Perpetual</h5>
              </div>
            </div>

            <div className="apy">
              <div className="col-name">
                <h3 className="vault-table-subheading">APY</h3>
              </div>
              <div>
                <h5 className="vault-data">23%</h5>
              </div>
              <div>
                <h5 className="vault-data">33%</h5>
              </div>
              <div>
                <h5 className="vault-data">23%</h5>
              </div>
              <div>
                <h5 className="vault-data">24%</h5>
              </div>
              <div>
                <h5 className="vault-data">13%</h5>
              </div>
              <div>
                <h5 className="vault-data">3%</h5>
              </div>
              <div>
                <h5 className="vault-data">23.56%</h5>
              </div>
              <div>
                <h5 className="vault-data">27%</h5>
              </div>
              <div>
                <h5 className="vault-data">11%</h5>
              </div>
            </div>
            <div className="sharpe-ratio">
              <div className="col-name">
                <h3 className="vault-table-subheading">SHARPE RATIO</h3>
              </div>
              <div>
                <h5 className="vault-data">2</h5>
              </div>
              <div>
                <h5 className="vault-data">3.4</h5>
              </div>
              <div>
                <h5 className="vault-data">1.2</h5>
              </div>
              <div>
                <h5 className="vault-data">1.45</h5>
              </div>
              <div>
                <h5 className="vault-data">2.2</h5>
              </div>
              <div>
                <h5 className="vault-data">6</h5>
              </div>
              <div>
                <h5 className="vault-data">2.3</h5>
              </div>
              <div>
                <h5 className="vault-data">3.7</h5>
              </div>
              <div>
                <h5 className="vault-data">1</h5>
              </div>
            </div>
            <div className="tvl">
              <div className="col-name">
                <h3 className="vault-table-subheading">TVL</h3>
              </div>
              <div>
                <h5 className="vault-data">$2300</h5>
              </div>
              <div>
                <h5 className="vault-data">$3300</h5>
              </div>
              <div>
                <h5 className="vault-data">$2039</h5>
              </div>
              <div>
                <h5 className="vault-data">$6700</h5>
              </div>
              <div>
                <h5 className="vault-data">$300</h5>
              </div>
              <div>
                <h5 className="vault-data">$7100</h5>
              </div>
              <div>
                <h5 className="vault-data">$6100</h5>
              </div>
              <div>
                <h5 className="vault-data">$3100</h5>
              </div>
              <div>
                <h5 className="vault-data">$3200</h5>
              </div>
            </div>
          </div>

          <h1 className="vault-table-heading">Swaptions Vaults</h1>
          <div className="box_">
            <div className="col1">
              <div className="col-name">
                <h3 className="vault-table-subheading">NAME</h3>
              </div>
              <div>
                <h5 className="vault-data">BTC</h5>
              </div>
              <div>
                <h5 className="vault-data">ETH</h5>
              </div>
              <div>
                <h5 className="vault-data">ADA</h5>
              </div>
              <div>
                <h5 className="vault-data">SOL</h5>
              </div>
              <div>
                <h5 className="vault-data">DOGE</h5>
              </div>
              <div>
                <h5 className="vault-data">DOT</h5>
              </div>
              <div>
                <h5 className="vault-data">TRX</h5>
              </div>
              <div>
                <h5 className="vault-data">AVAX</h5>
              </div>
              <div>
                <h5 className="vault-data">NEAR</h5>
              </div>
            </div>
            <div className="apy">
              <div className="col-name">
                <h3 className="vault-table-subheading">APY</h3>
              </div>
              <div>
                <h5 className="vault-data">23%</h5>
              </div>
              <div>
                <h5 className="vault-data">33%</h5>
              </div>
              <div>
                <h5 className="vault-data">23%</h5>
              </div>
              <div>
                <h5 className="vault-data">24%</h5>
              </div>
              <div>
                <h5 className="vault-data">13%</h5>
              </div>
              <div>
                <h5 className="vault-data">3%</h5>
              </div>
              <div>
                <h5 className="vault-data">23.56%</h5>
              </div>
              <div>
                <h5 className="vault-data">27%</h5>
              </div>
              <div>
                <h5 className="vault-data">11%</h5>
              </div>
            </div>
            <div className="sharpe-ratio">
              <div className="col-name">
                <h3 className="vault-table-subheading">SHARPE RATIO</h3>
              </div>
              <div>
                <h5 className="vault-data">2</h5>
              </div>
              <div>
                <h5 className="vault-data">3.4</h5>
              </div>
              <div>
                <h5 className="vault-data">1.2</h5>
              </div>
              <div>
                <h5 className="vault-data">1.45</h5>
              </div>
              <div>
                <h5 className="vault-data">2.2</h5>
              </div>
              <div>
                <h5 className="vault-data">6</h5>
              </div>
              <div>
                <h5 className="vault-data">2.3</h5>
              </div>
              <div>
                <h5 className="vault-data">3.7</h5>
              </div>
              <div>
                <h5 className="vault-data">1</h5>
              </div>
            </div>
            <div className="tvl">
              <div className="col-name">
                <h3 className="vault-table-subheading">TVL</h3>
              </div>
              <div>
                <h5 className="vault-data">$2300</h5>
              </div>
              <div>
                <h5 className="vault-data">$3300</h5>
              </div>
              <div>
                <h5 className="vault-data">$2039</h5>
              </div>
              <div>
                <h5 className="vault-data">$6700</h5>
              </div>
              <div>
                <h5 className="vault-data">$300</h5>
              </div>
              <div>
                <h5 className="vault-data">$7100</h5>
              </div>
              <div>
                <h5 className="vault-data">$6100</h5>
              </div>
              <div>
                <h5 className="vault-data">$3100</h5>
              </div>
              <div>
                <h5 className="vault-data">$3200</h5>
              </div>
            </div>
          </div>

          <h1 className="vault-table-heading">Leveraged Tokens</h1>
          <div className="box_">
            <div className="col1">
              <div className="col-name">
                <h3 className="vault-table-subheading">NAME</h3>
              </div>
              <div>
                <h5 className="vault-data">5x, 10x and 25x BTC ⏫</h5>
              </div>
              <div>
                <h5 className="vault-data">5x, 10x and 25x BTC ⏬</h5>
              </div>
              <div>
                <h5 className="vault-data">5x, 10x and 25x ETH ⏫</h5>
              </div>
              <div>
                <h5 className="vault-data">5x, 10x and 25x ETH ⏬</h5>
              </div>
              <div>
                <h5 className="vault-data">5x, 10x and 15x ADAE ⏫</h5>
              </div>
              <div>
                <h5 className="vault-data">5x, 10x and 15x ADA ⏬</h5>
              </div>
              <div>
                <h5 className="vault-data">5x, 10x and 25x SOL ⏫</h5>
              </div>
              <div>
                <h5 className="vault-data">5x, 10x and 15x SOL ⏬</h5>
              </div>
              <div>
                <h5 className="vault-data">5x, 10x and 25x DOGE ⏫</h5>
              </div>
            </div>
            <div className="apy">
              <div className="col-name">
                <h3 className="vault-table-subheading">APY</h3>
              </div>
              <div>
                <h5 className="vault-data">23%</h5>
              </div>
              <div>
                <h5 className="vault-data">33%</h5>
              </div>
              <div>
                <h5 className="vault-data">23%</h5>
              </div>
              <div>
                <h5 className="vault-data">24%</h5>
              </div>
              <div>
                <h5 className="vault-data">13%</h5>
              </div>
              <div>
                <h5 className="vault-data">3%</h5>
              </div>
              <div>
                <h5 className="vault-data">23.56%</h5>
              </div>
              <div>
                <h5 className="vault-data">27%</h5>
              </div>
              <div>
                <h5 className="vault-data">11%</h5>
              </div>
            </div>
            <div className="sharpe-ratio">
              <div className="col-name">
                <h3 className="vault-table-subheading">SHARPE RATIO</h3>
              </div>
              <div>
                <h5 className="vault-data">2</h5>
              </div>
              <div>
                <h5 className="vault-data">3.4</h5>
              </div>
              <div>
                <h5 className="vault-data">1.2</h5>
              </div>
              <div>
                <h5 className="vault-data">1.45</h5>
              </div>
              <div>
                <h5 className="vault-data">2.2</h5>
              </div>
              <div>
                <h5 className="vault-data">6</h5>
              </div>
              <div>
                <h5 className="vault-data">2.3</h5>
              </div>
              <div>
                <h5 className="vault-data">3.7</h5>
              </div>
              <div>
                <h5 className="vault-data">1</h5>
              </div>
            </div>
            <div className="tvl">
              <div className="col-name">
                <h3 className="vault-table-subheading">TVL</h3>
              </div>
              <div>
                <h5 className="vault-data">$2300</h5>
              </div>
              <div>
                <h5 className="vault-data">$3300</h5>
              </div>
              <div>
                <h5 className="vault-data">$2039</h5>
              </div>
              <div>
                <h5 className="vault-data">$6700</h5>
              </div>
              <div>
                <h5 className="vault-data">$3000</h5>
              </div>
              <div>
                <h5 className="vault-data">$7100</h5>
              </div>
              <div>
                <h5 className="vault-data">$6100</h5>
              </div>
              <div>
                <h5 className="vault-data">$3100</h5>
              </div>
              <div>
                <h5 className="vault-data">$3200</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vault;
