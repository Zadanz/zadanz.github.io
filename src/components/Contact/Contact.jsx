import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

function Contact() {
    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Contact Me</h1>
                <img src={theme_pattern} />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Reach out</h1>
                    <p>
                        Looking forward to work with you, please feel free to
                        connect!
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>!emailaddress!</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>111-222-3333</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />{" "}
                            <p>Beaversville, ON, Canada</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                    />
                    <label htmlFor="">Your Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                    />
                    <label htmlFor="">Write your message here</label>
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
