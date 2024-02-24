import React, {useEffect, useState} from "react";
import "../styles/aboutUs.scss";
const About = (props) => {
  return (
    <div className="about-us-container">
      <h1>About Us: SoccerWordle</h1>
      <p>Welcome to SoccerWordle, where the passion for soccer meets the challenge of word puzzles! We're dedicated to bringing together the thrilling world of soccer with the addictive gameplay of wordle to offer an experience that's both entertaining and educational for fans of the beautiful game.</p>
      
      <h2>Our Mission</h2>
      <p>At SoccerWordle, our mission is simple: to provide soccer enthusiasts with a fun and engaging way to test their knowledge of the sport while sharpening their vocabulary skills. Whether you're a die-hard supporter of your favorite team or just someone who enjoys the thrill of solving puzzles, SoccerWordle offers something for everyone.</p>
      
      <h2>What We Offer</h2>
      <ul>
        <li><strong>Soccer-Themed Word Puzzles:</strong> We specialize in creating wordle puzzles that revolve around the exciting world of soccer. From famous players and legendary teams to iconic stadiums and memorable moments, our puzzles cover a wide range of soccer-related topics to keep you entertained.</li>
        <li><strong>Challenge and Fun:</strong> Our wordle puzzles are designed to challenge your mind and keep you on your toes. With varying difficulty levels and a diverse selection of themes, there's always a new and exciting challenge waiting for you at SoccerWordle.</li>
        <li><strong>Community Engagement:</strong> We believe that soccer is more than just a game—it's a community. That's why we've created a platform where soccer fans from around the world can come together to share their love for the sport, compete in friendly competitions, and connect with like-minded individuals.</li>
      </ul>
      
      <h2>Get Involved</h2>
      <p>Join the SoccerWordle community today and start putting your soccer knowledge to the test! Whether you're a casual player looking for a quick brain teaser or a seasoned wordle pro seeking a new challenge, you'll find plenty to love at SoccerWordle. Thank you for being a part of our journey—we couldn't do it without you!</p>
      
      <h2>Contact Us</h2>
      <p>Have questions, feedback, or suggestions? We'd love to hear from you! Get in touch with us via email at <a href="mailto:info@soccerwordle.com">info@soccerwordle.com</a> or connect with us on social media.</p>
    </div>
  );
}

export default About