import React from "react";
import "../NewsLetter/NewsLetter.css";

function NewsLetter() {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email </h1>
      <p>Subsribe to our newsLetter and stay updated</p>
      <div className="Email_input">
        <input type="Email" placeholder="Enter your Email " />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
