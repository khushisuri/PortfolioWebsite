import React from "react";
import classes from "../input/input.module.css";

const Input=(props)=>{
    let classArray=[classes.element]
    console.log(props.placeValue);
    if(props.isvalid===false && props.clicked===true){
      classArray.push(classes.false)
    }
    
    const classArrayFinal=classArray.join(" ")
    let inputEl;
    switch(props.elementType){
        case("input"):
        inputEl=
        <div className={classes.desc}>
        <label>{props.placeValue}</label>
        <input className={classArrayFinal}
        type={props.config.type} 
        defaultValue={props.value}
        onChange={props.changed} valid={props.valid}
        ></input>
        </div>
        break;
        case("textarea"):
        inputEl=
        <div className={classes.desc}>
        <label>{props.placeValue}</label>
        <textarea className={classArrayFinal}{...props.config} 
        defaultValue={props.value}onChange={props.changed}
        valid={props.valid}></textarea>
        </div>
        break;
        /*case("submit"):
        inputEl=<input 
        {...props.config} 
        defaultValue={props.value}
        onClick={props.clicked} 
        >{props.display}</input>
        break;*/
        default:
        inputEl=<input className={classArrayFinal}
        {...props.config} defaultValue={props.value}
        onChange={props.changed} valid={props.valid}></input>
        break;
    }

    //console.log(inputEl)
    return(
        <div>
          {inputEl}  
        </div>
    )
}

export default Input;