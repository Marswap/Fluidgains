import React from "react";
import "./Footer.css";
import logo from "../../assets/img/logo.png";
import twit_icon from "../../assets/icon/logo-twitter.svg";
import telgm_icon from "../../assets/icon/telegran.svg";
import discord_icon from "../../assets/icon/logo-discord.svg";
// import insta_icon from "../../assets/icon/logo-instagram.svg";
import git_icon from "../../assets/icon/logo-github.svg";

const Footer = () => {
  return (
    <footer className="box">
      <div className="inner-box">
        <div className="footer-links-box">
          <div>
            <div className="d-flex">
              <img className="footer-logo-r" src={logo} alt="logo" />
            </div>
            <div className="social--links">
              <a href="https://twitter.com/fluidgains">
                <img
                  className="Social_icon"
                  src={twit_icon}
                  alt="Twitter Link"
                />
              </a>
              <a href="https://t.me/fluidgains">
                <img
                  className="Social_icon"
                  src={telgm_icon}
                  alt="Telegram Link"
                />
              </a>
              <a href="https://discord.com/invite/5F6DHU3gw9">
                <img
                  className="Social_icon"
                  src={discord_icon}
                  alt="Discord Link"
                />
              </a>

              <a href="https://github.com/Marswap/Fluidgains">
                <img className="Social_icon" src={git_icon} alt="Github Link" />
              </a>
            </div>
          </div>
          <ul>
            <li>About</li>
            <li>Key Features</li>
            <li>Early Access</li>
            <li>Team</li>
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

          <ul></ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
