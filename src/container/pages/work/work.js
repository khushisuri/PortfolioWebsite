import classes from "../work/work.module.css";
import React,{Component} from "react";
import DisplayComp from "../../../component/display/display";
import Logo1 from "../../../images/logo1.png";
import Logo2 from "../../../images/logo2.png";
import Logo3 from "../../../images/logo3.png";
import Logo4 from "../../../images/logo4.png";
import Logo5 from "../../../images/logo5.png";
import Logo6 from "../../../images/logo6.png";
import Logo8 from "../../../images/logo8.png";
import {NavLink} from "react-router-dom";
import p1 from "../../../images/p1.png";
import p2 from "../../../images/p3.png";
import p3 from "../../../images/p4.png";
import p4 from "../../../images/p5.png";
import p5 from "../../../images/p6.png";
import p6 from "../../../images/i1.png";
import p7 from "../../../images/i2.png";
import p8 from "../../../images/i3.png";
import p9 from "../../../images/i4.png";
import p10 from "../../../images/a1.png";
import p11 from "../../../images/a2.png";
import p12 from "../../../images/a3.png";
import p14 from "../../../images/b2.png";
import p15 from "../../../images/b3.png";
import p16 from "../../../images/c1.png";
import p17 from "../../../images/br1.png";
import p18 from "../../../images/br2.png";
import p19 from "../../../images/br3.png";
import p20 from "../../../images/br4.png";
import p21 from "../../../images/br5.png";
import p22 from "../../../images/br6.png";

class Work extends Component{

    state={
        display:[
            {
                pics:{
                pic1:p6,
                pic2:p7,
                pic3:p8,
                pic4:p9,
                },
                config:{
                    path:"/work/1",
                    query:" ",
                    logo:Logo1
                }
            },
            {
                pics:{
                pic1:p1,
                pic2:p2,
                pic3:p3,
                pic4:p4,
                pic5:p5,
                },
                config:{
                    path:"/work/2",
                    query:" ",
                    logo:Logo2
                }
            },
            {
                pics:{
                pic1:p10,
                pic2:p11,
                pic3:p12,
                },
                config:{
                    path:"/work/3",
                    query:" ",
                    logo:Logo3
                }
            },
            {
                pics:{
                pic2:p14,
                pic3:p15,
                },
                config:{
                    path:"/work/4",
                    query:" ",
                    logo:Logo4
                }
            },
            {
                pics:{
                    pic1:p16,
                },
                config:{
                    path:"/work/5",
                    query:" ",
                    logo:Logo5
                }
            },
            {
                pics:{
                    pic1:p17,
                    pic2:p18,
                    pic3:p19,
                    pic4:p20,
                    pic5:p21,
                    pic6:p22
                },
                config:{
                    path:"/work/6",
                    query:" ",
                    logo:Logo8
                }
            },
            {
                pics:{},
               config:{
                    path:"template",
                    query:" ",
                    logo:Logo6
                }
            }
        ]
        
    }
   
    queryConvertHandler=(ob)=>{
        let queries=[];
        
        for (const pic in ob)
        {
            queries.push(pic+"="+ob[pic])
        }
        
        const queriesStr=queries.join("&");
        return queriesStr;
    }
    
    render(){
        for( const picIterator of this.state.display){
            picIterator.config.query=(this.queryConvertHandler(picIterator.pics))
        }
        
        console.log(this.state.display);

        
        return(
            <div className={classes.top}>
            <h1>Click on a Post to see full presentation</h1>
           <div className={classes.work}>
           {this.state.display.map(displayEl=>(
               <NavLink 
                key={displayEl.config.logo}
                to={{
                pathname:displayEl.config.path,
                search:displayEl.config.query
           }}><DisplayComp image={displayEl.config.logo}/></NavLink>
            ))} 
            </div>
            </div>
        )
    }
}

export default Work;

