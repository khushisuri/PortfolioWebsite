import React from "react";
import classes from "../slide/slide.module.css";
import { motion } from "framer-motion";

const Slide=(props)=>{
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
      
      
    return(
        <motion.div initial="hidden"
        animate="visible"
        transition={{duration: 1}}
        variants={variants}
         className={classes.slide}>
            <img src={props.image} alt="slide"/>
        </motion.div>
    )
}

export default Slide;
