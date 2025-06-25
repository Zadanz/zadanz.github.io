import React from "react";
import "./About.css";
import profile_img from "../../assets/beaver_about.png";

export const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I REALLY like toilet paper.</p>
                        <p>Like, reeeeeeaaallly like toilet paper.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>New Orleans Smooth Jazz Dance</p>
                            <hr style={{ width: "560%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>ROLLS OF TOILET PAPER CONSUMED PER DAY</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>TOILETS CLOGGED</p>
                </div>
            </div>
        </div>
    );
};

export default About;
