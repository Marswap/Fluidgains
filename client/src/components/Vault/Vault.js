import React from "react";
import "./Vault.css";



const Vault = () => {
    return (
        <>
            <div className="vault-main-box">
                <div className="vault-buttonGroup">
                    <button className="button" type="button">All Vaults</button>
                    <button className="button" type="button">Eligible Vaults</button>
                    <button className="button" type="button">My Vaults</button>
                    <button className="button" type="button">Vesting </button>

                </div>


                <div className="assets-info-box">
                    <div className="asset-under-management">
                        <h2>Assets under management:<span > $1,831,662</span></h2>
                    </div>
                    <div className="total-value-locked">
                        <h2>Total Value Locked:<span> $2,931,658</span></h2>
                    </div>

                </div>

                <div className="data-tables">
                    <h1>Options Vaults</h1>

                    <div className="box_">

                        <div className="col1">
                            <div className="col-name"><h3>NAME</h3></div>
                            <div><h5>DUST</h5></div>
                            <div><h5>SOL</h5></div>
                            <div><h5>stSOL</h5></div>
                            <div><h5>BTC USDC</h5></div>
                            <div><h5>BTC</h5></div>
                            <div><h5>ETH</h5></div>
                            <div><h5>SOL USDC</h5></div>
                            <div><h5>scnSOL</h5></div>
                            <div><h5>SRM</h5></div>

                        </div>
                        <div className="apy">
                            <div className="col-name"><h3>APY</h3></div>
                            <div><h5>23%</h5></div>
                            <div><h5>33%</h5></div>
                            <div><h5>23%</h5></div>
                            <div><h5>24%</h5></div>
                            <div><h5>13%</h5></div>
                            <div><h5>3%</h5></div>
                            <div><h5>23%</h5></div>
                            <div><h5>27%</h5></div>
                            <div><h5>11%</h5></div>

                        </div>
                        <div className="sharpe-ratio">
                            <div className="col-name"><h3>SHARPE RATIO</h3></div>
                            <div><h5>2</h5></div>
                            <div><h5>3.4</h5></div>
                            <div><h5>1.2</h5></div>
                            <div><h5>1.45</h5></div>
                            <div><h5>2.2</h5></div>
                            <div><h5>6</h5></div>
                            <div><h5>2.3</h5></div>
                            <div><h5>3.7</h5></div>
                            <div><h5>1</h5></div>

                        </div>
                        <div className="tvl">
                            <div className="col-name"><h3>TVL</h3></div>
                            <div><h5>$2300</h5></div>
                            <div><h5>$3300</h5></div>
                            <div><h5>$2039</h5></div>
                            <div><h5>$6700</h5></div>
                            <div><h5>$3000</h5></div>
                            <div><h5>$7100</h5></div>
                            <div><h5>$6100</h5></div>
                            <div><h5>$3100</h5></div>
                            <div><h5>$3200</h5></div>

                        </div>


                    </div>
                    <h1>Swaps Vaults</h1>
                    <div className="box_">
                        <div className="col1">
                            <div className="col-name">
                                <h3>NAME</h3></div>
                            <div><h5>BTC Perpetual</h5></div>
                            <div><h5>ETH Perpetual</h5></div>
                            <div><h5>ADA Perpetual</h5></div>
                            <div><h5>SOL Perpetual</h5></div>
                            <div><h5>DOGE Perpetual</h5></div>
                            <div><h5>DOT Perpatual</h5></div>
                            <div><h5>TRX Perpetual</h5></div>
                            <div><h5>AVAX Perpetual</h5></div>
                            <div><h5>NEAR Perpetual</h5></div>

                        </div>

                        <div className="apy">

                            <div className="col-name"><h3>APY</h3></div>
                            <div><h5>23%</h5></div>
                            <div><h5>33%</h5></div>
                            <div><h5>23%</h5></div>
                            <div><h5>24%</h5></div>
                            <div><h5>13%</h5></div>
                            <div><h5>3%</h5></div>
                            <div><h5>23.56%</h5></div>
                            <div><h5>27%</h5></div>
                            <div><h5>11%</h5></div>

                        </div>
                        <div className="sharpe-ratio">
                            <div className="col-name">
                                <h3>SHARPE RATIO</h3></div>
                            <div><h5>2</h5></div>
                            <div><h5>3.4</h5></div>
                            <div><h5>1.2</h5></div>
                            <div><h5>1.45</h5></div>
                            <div><h5>2.2</h5></div>
                            <div><h5>6</h5></div>
                            <div><h5>2.3</h5></div>
                            <div><h5>3.7</h5></div>
                            <div><h5>1</h5></div>

                        </div>
                        <div className="tvl">
                            <div className="col-name"><h3>TVL</h3></div>
                            <div><h5>$2300</h5></div>
                            <div><h5>$3300</h5></div>
                            <div><h5>$2039</h5></div>
                            <div><h5>$6700</h5></div>
                            <div><h5>$300</h5></div>
                            <div><h5>$7100</h5></div>
                            <div><h5>$6100</h5></div>
                            <div><h5>$3100</h5></div>
                            <div><h5>$3200</h5></div>

                        </div>

                    </div>


                    <h1>Swaptions Vaults</h1>
                    <div className="box_">
                        <div className="col1">

                            <div className="col-name"><h3>NAME</h3></div>
                            <div><h5>BTC</h5></div>
                            <div><h5>ETH</h5></div>
                            <div><h5>ADA</h5></div>
                            <div><h5>SOL</h5></div>
                            <div><h5>DOGE</h5></div>
                            <div><h5>DOT</h5></div>
                            <div><h5>TRX</h5></div>
                            <div><h5>AVAX</h5></div>
                            <div><h5>NEAR</h5></div>



                        </div>
                        <div className="apy">
                            <div className="col-name"><h3>APY</h3></div>
                            <div><h5>23%</h5></div>
                            <div><h5>33%</h5></div>
                            <div><h5>23%</h5></div>
                            <div><h5>24%</h5></div>
                            <div><h5>13%</h5></div>
                            <div><h5>3%</h5></div>
                            <div><h5>23.56%</h5></div>
                            <div><h5>27%</h5></div>
                            <div><h5>11%</h5></div>

                        </div>
                        <div className="sharpe-ratio">

                            <div className="col-name">
                                <h3>SHARPE RATIO</h3></div>
                            <div><h5>2</h5></div>
                            <div><h5>3.4</h5></div>
                            <div><h5>1.2</h5></div>
                            <div><h5>1.45</h5></div>
                            <div><h5>2.2</h5></div>
                            <div><h5>6</h5></div>
                            <div><h5>2.3</h5></div>
                            <div><h5>3.7</h5></div>
                            <div><h5>1</h5></div>

                        </div>
                        <div className="tvl">
                            <div className="col-name"><h3>TVL</h3></div>
                            <div><h5>$2300</h5></div>
                            <div><h5>$3300</h5></div>
                            <div><h5>$2039</h5></div>
                            <div><h5>$6700</h5></div>
                            <div><h5>$300</h5></div>
                            <div><h5>$7100</h5></div>
                            <div><h5>$6100</h5></div>
                            <div><h5>$3100</h5></div>
                            <div><h5>$3200</h5></div>

                        </div>

                    </div>

                    <h1>Leveraged Tokens</h1>
                    <div className="box_">
                        <div className="col1">

                            <div className="col-name"><h3>NAME</h3></div>
                            <div><h5>5x, 10x and 25x BTC  ⏫</h5></div>
                            <div><h5>5x, 10x and 25x BTC  ⏬</h5></div>
                            <div><h5>5x, 10x and 25x ETH  ⏫</h5></div>
                            <div><h5>5x, 10x and 25x ETH  ⏬</h5></div>
                            <div><h5>5x, 10x and 15x ADAE ⏫</h5></div>
                            <div><h5>5x, 10x and 15x ADA  ⏬</h5></div>
                            <div><h5>5x, 10x and 25x SOL  ⏫</h5></div>
                            <div><h5>5x, 10x and 15x SOL  ⏬</h5></div>
                            <div><h5>5x, 10x and 25x DOGE ⏫</h5></div>

                        </div>
                        <div className="apy">

                            <div className="col-name"><h3>APY</h3></div>
                            <div><h5>23%</h5></div>
                            <div><h5>33%</h5></div>
                            <div><h5>23%</h5></div>
                            <div><h5>24%</h5></div>
                            <div><h5>13%</h5></div>
                            <div><h5>3%</h5></div>
                            <div><h5>23.56%</h5></div>
                            <div><h5>27%</h5></div>
                            <div><h5>11%</h5></div>

                        </div>
                        <div className="sharpe-ratio">

                            <div className="col-name">
                                <h3 >SHARPE RATIO</h3></div>
                            <div><h5>2</h5></div>
                            <div><h5>3.4</h5></div>
                            <div><h5>1.2</h5></div>
                            <div><h5>1.45</h5></div>
                            <div><h5>2.2</h5></div>
                            <div><h5>6</h5></div>
                            <div><h5>2.3</h5></div>
                            <div><h5>3.7</h5></div>
                            <div><h5>1</h5></div>

                        </div>
                        <div className="tvl">
                            <div className="col-name"><h3>TVL</h3></div>
                            <div><h5>$2300</h5></div>
                            <div><h5>$3300</h5></div>
                            <div><h5>$2039</h5></div>
                            <div><h5>$6700</h5></div>
                            <div><h5>$3000</h5></div>
                            <div><h5>$7100</h5></div>
                            <div><h5>$6100</h5></div>
                            <div><h5>$3100</h5></div>
                            <div><h5>$3200</h5></div>

                        </div>

                    </div>






                </div>



            </div>

        </>



    );
};

export default Vault;