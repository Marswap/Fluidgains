import React from "react";
import "./Team.css";
import Avatar1 from "../../assets/Avatar/KunalTapse_.png";
import Avatar2 from "../../assets/Avatar/VaibhavSingh.jpg";
import Avatar3 from "../../assets/Avatar/Suhas_Malhotra.png";
import Avatar4 from "../../assets/Avatar/Sumrit_Arora.png";
import Avatar5 from "../../assets/Avatar/Dipanshu_.png";
import github_icon from "../../assets/icon/icon-github.svg";
import linkedIn_icon from "../../assets/icon/icon-linkedin.svg";

// assets/Avatar/Kunal Tapse.jpg
const Team = () => {
    return (
        <>
            <div className="container" id="team">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Meet The Team</h1>
                    </div>

                </div>
            </div>
            <div className="main-box">
                <div className="member-card">
                    <div className="Avatar-box">
                        <img className="display-img" src={Avatar1} alt="Profile Image" />

                    </div>
                    <div className="Avatar-name">
                        <h3>Kunal Tapse</h3>

                    </div>
                    <div className="Avatar-role">
                        <h5>Co-founder & Blockchain Architect</h5>

                    </div>
                    <div className="Avatar-social-links">
                        <a href="https://www.linkedin.com/in/kunal-tapse-20b848202">
                            <img className="Social_icon" src={linkedIn_icon} alt="Twitter Link" />
                        </a>

                    </div>

                </div>

                <div className="member-card">
                    <div className="Avatar">
                        <img className="display-img" src={Avatar2} alt="Profile Image" />

                    </div>
                    <div className="Avatar-name">
                        <h3>Vaibhav Singh</h3>

                    </div>
                    <div className="Avatar-role">
                        <h5>Co-founder</h5>

                    </div>
                    <div className="Avatar-social-links">
                        <a href="https://www.linkedin.com/in/vaibhav-singh-6ba6691a9">
                            <img className="Social_icon" src={linkedIn_icon} alt="Twitter Link" />
                        </a>


                    </div>

                </div>

                <div className="member-card">
                    <div className="Avatar">
                        <img className="display-img" src={Avatar3} alt="Profile Image" />

                    </div>
                    <div className="Avatar-name">
                        <h3>Suhas Malhotra</h3>

                    </div>
                    <div className="Avatar-role">
                        <h5>Fullstack Developer</h5>

                    </div>
                    <div className="Avatar-social-links">
                        <a href="https://www.linkedin.com/in/kunal-tapse-20b848202">
                            <img className="Social_icon" src={linkedIn_icon} alt="Twitter Link" />
                        </a>


                    </div>

                </div>

                <div className="member-card">
                    <div className="Avatar">
                        <img className="display-img" src={Avatar4} alt="Profile Image" />

                    </div>
                    <div className="Avatar-name">
                        <h3>Sumrit Arora</h3>

                    </div>
                    <div className="Avatar-role">
                        <h5>Blockchain Developer</h5>

                    </div>
                    <div className="Avatar-social-links">
                        <a href="https://www.linkedin.com/in/sumrit-arora-64b5671b5">
                            <img className="Social_icon" src={linkedIn_icon} alt="Twitter Link" />
                        </a>

                    </div>

                </div>

                <div className="member-card">
                    <div className="Avatar">
                        <img className="display-img" src={Avatar5} alt="Profile Image" />

                    </div>
                    <div className="Avatar-name">
                        <h3>Dipanshu Raj</h3>

                    </div>
                    <div className="Avatar-role">
                        <h5>Blockchain Developer</h5>

                    </div>
                    <div className="Avatar-social-links">
                        <a href="https://www.linkedin.com/in/dipanshu-raj-b083841aa">
                            <img className="Social_icon" src={linkedIn_icon} alt="Twitter Link" />
                        </a>

                    </div>

                </div>











            </div>
        </>


    );
};

export default Team;

