import classes from '../display/display.module.css';
import React from 'react';
import { motion } from 'framer-motion';
//import { NavLink } from "react-router-dom";

const Display = props => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants}
      className={classes.cont}
    >
      <h2>{props.description}</h2>
      <img src={props.image} alt="logo"></img>
    </motion.div>
  );
};

export default Display;
