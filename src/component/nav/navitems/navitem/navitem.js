import React from 'react';
import classes from '../navitem/navitem.module.css';
import { Link } from 'react-router-dom';

const NavItem = props => {
  return (
    <div className={classes.navitem}>
      <Link to={{ pathname: props.path, search: props.query }}>
        <li
          data-aos={props.trans}
          data-aos-delay={props.delay}
          data-aos-duration={props.duration}
          data-aos-easing={props.easing}
        >
          {props.children}
        </li>
      </Link>
    </div>
  );
};

export default NavItem;
