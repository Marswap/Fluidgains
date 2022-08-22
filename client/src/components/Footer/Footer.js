import React from "react";
import "./Footer.css";
import logo from "../../assets/img/logo.png";
import twit_icon from "../../assets/icon/logo-twitter.svg";
import telgm_icon from "../../assets/icon/telegran.svg";
import discord_icon from "../../assets/icon/logo-discord.svg";
import insta_icon from "../../assets/icon/logo-instagram.svg";
import git_icon from "../../assets/icon/logo-github.svg";

const Footer = () => {
    return (
        <footer className="box">
            <div className="style-padding"></div>
            <div className="inner-box">
                <div className="left-logo-hidden-box">
                    <img className="footer-logo-l" src={logo} alt="logo" />
                </div>

                <div className="footer-links-box">
                    <ul>
                        <li>About</li>
                        <li>Key Features</li>
                        <li>Early Access</li>
                        <li>Team</li>

                    </ul>
                    <ul>
                        <li>Contact</li>
                        <li>Investors</li>
                        <li>Traders</li>
                        <li>Speculators</li>

                    </ul>
                    <ul>
                        <li>Liquidity Providers</li>
                        <li>Hedgers</li>
                        <li>Vaults</li>
                        <li>Vesting</li>

                    </ul>

                    <ul>

                        <div>
                            <img className="footer-logo-r" src={logo} alt="logo" />
                        </div>
                    </ul>


                </div>
                    <div className="social-links" >
                    <a href="#">
                        <img className="Social_icon" src={twit_icon} alt="Twitter Link" />
                    </a>
                    <a href="#">
                        <img className="Social_icon" src={telgm_icon} alt="Telegram Link" />
                    </a>
                    <a href="#">
                        <img className="Social_icon" src={discord_icon} alt="Discord Link" />
                    </a>

                    <a href="#">
                        <img className="Social_icon" src={insta_icon} alt="Instagram Link" />
                    </a>
                    <a href="#">
                        <img className="Social_icon" src={git_icon} alt="Github Link" />
                    </a>


                </div>

            </div>

        </footer>
    );
};

export default Footer;
