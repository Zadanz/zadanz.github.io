import React from "react";
import "./FunFacts.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import data from "../../assets/facts_data";
//import arrow_icon from "../../assets/arrow_icon.svg";

const FunFacts = () => {
    return (
        <div id="funfacts" className="funfacts">
            <div className="funfacts-title">
                <h1>Fun Facts</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="fact-container">
                {data.map((data, index) => {
                    return (
                        <div key={index} className="fact-format">
                            <h3>{data.f_no}</h3>
                            <h2>{data.f_name}</h2>
                            <p>{data.f_desc}</p>
                            {/* <div className="fact-readmore">
                                <p>Read More</p>
                                <img src={arrow_icon} alt="" />
                            </div> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FunFacts;
