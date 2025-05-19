import React from "react";
import "./Gallery.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="gallery-title">
                <h1>Work Highlights</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="gallery-container">
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} />;
                })}
            </div>
            <div className="gallery-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    );
};

export default Gallery;
