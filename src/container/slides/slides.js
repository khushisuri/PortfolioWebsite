import React,{Component} from "react";
import Slide from "../../component/slide/slide";
import classes from "../slides/slides.module.css";

class Slides extends Component{
    
     state={
         addressBook1:null
     }
    componentWillMount(){
        //console.log(this.props);
        const query=new URLSearchParams(this.props.location.search);
       // console.log(this.props.location);
        let data1=[];
        for(const param of query.entries()){
            //console.log(param);
            data1.push(param[1])
        }
        console.log(data1)
        if(this.state.addressBook1!==data1){
            this.setState({
                addressBook1:data1
            })
        }
    }

    
    
    render(){
        return(
           <div className={classes.slides}>
               {this.state.addressBook1.map(address=>{
                   return <Slide key={address} image={address}/>
               })}
            
           </div>
        )
    }
}

export default Slides;