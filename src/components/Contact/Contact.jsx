import React, {useState} from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
//import call_icon from "../../assets/call_icon.svg";

function Contact() {
    const [showPopup, setShowPopup] = useState(false);

    // Web3Form submit function
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d58820e6-1e4d-4790-93e1-f25dcb475275");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          //alert("Email sent, thank you!");
          setShowPopup(true);
          event.target.reset();

          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        } else{
            alert("Oops! There was in issue sending your message.")
        }
      };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Contact Me</h1>
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
                            <img src={mail_icon} alt="" /> <p>aleksvalianski@gmail.com</p>
                        </div>
                        {/* <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>111-222-3333</p>
                        </div> */}
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />{" "}
                            <p>Calgary, AB, Canada</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
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
                        placeholder="Enter your message">
                    </textarea>
                    <div className="submit-area">
                        <button type="submit" className="contact-submit">
                            Submit
                        </button>
                        {showPopup && (
                            <div className="sentMessage">
                                Message sent successfully!
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
