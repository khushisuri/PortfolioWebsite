import React, { Component } from 'react';
import classes from '../who/who.module.css';
import img1 from '../../images/profile.jpg';
import logo from '../../images/logo7.png';
import DisplayComp from '../../component/display/display';
import { NavLink } from 'react-router-dom';
import img2 from '../../images/cr1.jpg';
import img3 from '../../images/cr2.jpg';
import img4 from '../../images/cr3.jpg';
import img5 from '../../images/cr4.png';
import img6 from '../../images/cr5.png';
import img7 from '../../images/cr6.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

class Who extends Component {
  state = {
    firstDisplay: {
      pic1: img2,
      pic2: img4,
      pic3: img3
    },
    secondDisplay: {
      pic1: img5,
      pic2: img6,
      pic3: img7
    }
  };

  queryConvertHandler = ob => {
    let queryOne = [];

    for (const pic in ob) {
      queryOne.push(pic + '=' + ob[pic]);
    }

    const queryStrOne = queryOne.join('&');
    return queryStrOne;
  };

  render() {
    const variants = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    };
    console.log(this.props);
    const queryOne = this.queryConvertHandler(this.state.firstDisplay);
    //console.log(queryOne);
    const queryTwo = this.queryConvertHandler(this.state.secondDisplay);
    return (
      <div>
        <div className={classes.Who}>
          <div>
            <motion.img
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              variants={variants}
              src={img1}
              alt="profile"
            ></motion.img>
          </div>
          <div className={classes.right}>
            <h2>KHUSHI SURI</h2>
            <h2>ABOUT</h2>
            <p>
              Hello! My name is Khushi and I am a front end developer trained in React with redux as
              well. I am trained in various Adobe design softwares namely Photoshop ,Illustrator and
              Indesign. Having been fortunate enough to study in a Convent I am disciplined, focused
              and capable to completely understand requests of domestic as well as foreign clients.
              Along with that having earned a bachelor's degree in software development though being
              new to the field I am fueled with ambition and capable enough to present a dynamic
              real world application .Having an eye for design along with development I can present
              visually pleasing as well as fully functional websites/applications as required.
            </p>
            <p>
              For further queries refer the contact page or click <Link to="/contact">here</Link>
            </p>
          </div>
        </div>
        <div className={classes.certificates}>
          <h2>CERTIFICATES</h2>
          <h2>Click to view certificates</h2>

          <div>
            <NavLink
              to={{
                pathname: '/certificate/1',
                search: queryOne
              }}
            >
              <DisplayComp description="Udemy" image={logo} />
            </NavLink>
            <NavLink
              to={{
                pathname: '/certificate/2',
                search: queryTwo
              }}
            >
              <DisplayComp description="Language" image={logo} />
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Who;
