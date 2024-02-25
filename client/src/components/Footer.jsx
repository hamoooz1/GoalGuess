import React from "react";

import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


import "../styles/footer.scss";


function Footer(props) {
  return (
    <div className="footer">
      <div className="inner-footer">
        <h1>Have any questions?</h1>
        <p>
          If you have any suggestions, bug reports, or general feedback to enhance your experience, we value your input and encourage you to share your thoughts with us. Your insights play a crucial role in our ongoing commitment to improving and refining our services.</p>
        <button className="contact-button">Contact</button>
        <div className="contact-info">
          <h1 className="goal-guess-logo">Goal <br />Guess<br /></h1>
          <div className="about-us">
            <h4>About Us</h4>
            <ul>
              <li onClick={props.handleBio}>Bio</li>
              <li>Our Progress</li>
              <li>Our Work</li>
            </ul>
          </div>

          <div className="about-us">
            <h4>Support</h4>
            <ul>
              <li>Donate</li>
              <li>Suggestions</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="about-us">
            <h4>Follow Us</h4>
            <ul className="follow-us">
              <li className="socials-logos"><a style={{ color: 'white' }} href="https://github.com/hamoooz1/GoalGuess" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
              <li className="socials-logos"><FaLinkedin /></li>
              <li className="socials-logos"><FaInstagram /></li>
            </ul>
          </div>
        </div>
        <div className="bottom-footer">
          <h5>@2024 GoalGuess Ltd. All rights reserved</h5>
          <h5>Privacy Policy</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
