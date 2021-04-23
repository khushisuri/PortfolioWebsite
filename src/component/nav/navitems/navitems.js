import React, { Component } from "react";
import 'aos/dist/aos.css';
import NavItem from "../navitems/navitem/navitem";
//import IMG1 from "../../../images/man.png";
//import IMG2 from "../../../images/girls.png"; 
//import IMG3 from "../../../images/green.jpg";
//import IMG4 from "../../../images/back.jpg";
//import IMG5 from "../../../images/moon.png";
//import IMG6 from "../../../images/flower1.png";
import classes from "../navitems/navitems.module.css";



class NavItems extends Component {
   /* state={
        first:{id:1,address:IMG1,back:IMG4,front:IMG5},
        second:{id:2,address:IMG2,back:IMG3,front:IMG6}
        
    }*/

    
    render(){
      
        return(
            <div className={classes.navitems}>
               <div className={classes.list}>
                <NavItem
                path="/page"
                /*query={"address="+this.state.first.address+"&back="+this.state.first.back
                +"&front="+this.state.first.front}*/
                trans="slide-down"
                delay="500"
                duration="300"
                easing="ease-in-out"
                >HOME</NavItem>
                <NavItem
                path="/who"
                trans="slide-down"
                delay="1500"
                duration="300"
                easing="ease-in-out"
                >WHO</NavItem>
               <NavItem
                path="/work"
                trans="slide-down"
                delay="2000"
                duration="300"
                easing="ease-in-out"
                >WORK</NavItem>
               </div>
               
            </div>
        )
    }
    
}

export default NavItems;

/*<NavItem
                path="/page/2"
                query={"address="+this.state.second.address+"&back="+this.state.second.back
                +"&front="+this.state.second.front}
                trans="slide-down"
                delay="1000"
                duration="300"
                easing="ease-in-out"
                ></div>WHAT</NavItem>
                */