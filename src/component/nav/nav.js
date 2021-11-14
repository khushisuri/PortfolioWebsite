import React, { Component } from 'react';
import '../nav/nav.css';
import NavItems from '../nav/navitems/navitems';
import NavItem from '../nav/navitems/navitem/navitem';
import Sidebar from '../../UI/sidebar/sidebar';
import Backdrop from '../../UI/backdrop/backdrop';

class Nav extends Component {
  state = {
    click: false
  };

  menuHandler = () => {
    this.setState({
      click: !this.state.click
    });
  };
  render() {
    let backdrop = null;

    if (!this.state.click) {
      backdrop = null;
    } else {
      backdrop = <Backdrop />;
    }

    return (
      <div>
        <div onClick={this.menuHandler}>{backdrop}</div>
        <ul className="nav-list">
          <div className="menu" onClick={this.menuHandler}>
            <li data-aos="fade-in" data-aos-duration="1000">
              <div></div>
              <div></div>
              <div></div>
            </li>
          </div>

          <div className="middleNav">
            <NavItems />
          </div>
          <Sidebar display={this.state.click} />

          <div>
            <NavItem path="/contact" trans="slide-down" duration="800" easing="ease-in-out">
              CONTACT
            </NavItem>
          </div>
        </ul>
      </div>
    );
  }
}

export default Nav;

//<Sidebar display={this.state.click}/>

/*<Link to={{pathname:"/page/1",
search:"address="+this.state.first.address+"&back="+this.state.first.back
+"&front="+this.state.first.front}
}><li 
data-aos="slide-down"
data-aos-delay="500"
data-aos-duration="300"
data-aos-easing="ease-in-out"
>HOME</li></Link> 
<Link to={{pathname:"/page/2",
search:"address="+this.state.second.address+"&back="+this.state.second.back
+"&front="+this.state.second.front}
}>
<li data-aos="slide-down"
    data-aos-delay="1000"
    data-aos-duration="300"
   data-aos-easing="ease-in-out"
    >WHAT</li></Link> 
<Link to="/page/3">
<li data-aos="slide-down"
    data-aos-delay="1500"
    data-aos-duration="300"
    data-aos-easing="ease-in-out"
    >WHO</li></Link>
<Link to="/work">
<li data-aos="slide-down"
    data-aos-delay="2000"
    data-aos-duration="300"
    data-aos-easing="ease-in-out"
    >WORK</li></Link> 
</div>
<div>
<Link to="/contact">
<li data-aos="slide-down"
    //data-aos-delay="50"
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
    >CONTACT</li>
</Link>
</div>*/
