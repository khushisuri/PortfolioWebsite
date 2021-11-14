import React from 'react';
import classes from '../footer/footer.module.css';
import footflower from '../../images/footer.png';
import Navitem from '../nav/navitems/navitem/navitem';
//import AOS from 'aos';
import 'aos/dist/aos.css';
//import {Link} from "react-router-dom";

const Footer = props => {
  return (
    <div className={classes.flower}>
      <img
        src={footflower}
        alt="footer"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-delay="800"
      />
      <ul
        className={classes.footer}
        //data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-delay="1300"
      >
        <Navitem path="/who">WHO</Navitem>
        <Navitem path="/contact">CONTACT</Navitem>
      </ul>
    </div>
  );
};

export default Footer;
