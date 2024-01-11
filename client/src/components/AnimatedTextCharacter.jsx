import React, {useEffect, useState, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";
import "../styles/homepage.scss";


const AnimatedTextCharacter = ({text, handlePlay}) => {
  const letters = Array.from(text);
  const controls = useAnimation();

  const container = {
    hidden: {opacity: 0},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: 0.3, delayChildren: 0.4 * i},
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      textShadow: "20px 20px 14px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        damping: 22,
        stiffness: 20,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 10,
      },
    },
  };

  return (
    <>
      <motion.div
        style={{
          marginTop: "-85px",
          fontSize: "10rem",
          color: "#ffb703",
        }}
        variants={container}
        initial="hidden"
        animate="visible"
      // whileHover={{
      //   textShadow: "20px 20px 14px rgba(255, 183, 3, 0.3)",
      //   transition: { duration: 0.02 },
      // }}
      >
        {letters.map((letter, index) => (
          <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};


export default AnimatedTextCharacter;
