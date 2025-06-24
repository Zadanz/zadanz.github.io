import React from "react";
import "./Intro.css";
import profile_img from "../../assets/beaver_profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Intro = () => {
    return (
        <div id="home" className="intro">
            <img src={profile_img} alt="" />
            <h1>
                <span>I'm Aleks,</span> frontend developer by day, toilet paper
                bandit by night.
            </h1>
            <p>
                A sordid past left me with an insatiable desire for toilet
                paper. After 10 long years of fighting this curse, I have now
                shed my old self and accepted the calling of the toilet paper.
            </p>
            <div className="intro-action">
                <div className="intro-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
                <div className="intro-resume">My resume</div>
            </div>
        </div>
    );
};

export default Intro;
