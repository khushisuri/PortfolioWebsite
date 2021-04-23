import React from "react";
import classes from "../spinner/spinner.module.css";

const Spinner=(props)=>{
    return(
        <body>
        <div className={classes.loading}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        </div>
        </body>
    )
}

export default Spinner;