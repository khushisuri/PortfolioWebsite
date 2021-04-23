import React from "react";
import classes from "../sidebar/sidebar.module.css";
import NavItems from "../../component/nav/navitems/navitems";

const Sidebar=(props)=>{
    
 let classVal=[classes.sidebar];
    if(props.display){
        
        classVal.push(classes.on)
    }
    
    //console.log(props.display)
    let classValue= classVal.join(" ");
    return(
        <div  className={classValue}>
        <NavItems/>
        </div>
    )
}

export default Sidebar;