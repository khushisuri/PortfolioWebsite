import React, { Component } from 'react';
import '../page/page.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import Footer from '../footer/footer';
import IMG1 from '../../images/man.png';
import IMG2 from '../../images/back.jpg';
import IMG3 from '../../images/moon.png';

AOS.init({});

class Page extends Component {
  render() {
    return (
      <div className="page">
        <div id="back">
          <img src={IMG2} alt="background" />
        </div>
        <div id="moon">
          <img src={IMG3} alt="front" />
        </div>
        <div className="section">
          <div data-aos="slide-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <p>ART</p>
          </div>
          <div
            id="second"
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p>FEAST</p>
          </div>
        </div>
        <div className="desc">
          <p id="line1" data-aos="fade-in" data-aos-duration="800" data-aos-easing="ease-in-out">
            Communication Through Design
          </p>
          <p
            id="line2"
            data-aos="fade-in"
            data-aos-delay="500"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            Design Portfolio to display authentic, introspective and captivating designs that will
            make you look twice
          </p>
          <p
            id="line3"
            data-aos="fade-in"
            data-aos-delay="1000"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            Design that you can relate to
          </p>
        </div>
        <NavLink to={'/work'}>
          <button
            className="button"
            data-aos="fade-in"
            data-aos-delay="1500"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            See Work
          </button>
        </NavLink>
        <div className="bottom">
          <div className="items">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-easing="ease-in-out"
              src={IMG1}
              alt="display"
            />
            <div>
              <p
                data-aos="slide-right"
                data-aos-duration="1000"
                data-aos-delay="2500"
                data-aos-easing="ease-in-out"
              >
                Fashion Forward
              </p>
              <p
                id="p2"
                data-aos="slide-right"
                data-aos-duration="1000"
                data-aos-delay="2600"
                data-aos-easing="ease-in-out"
              >
                Style is a way to say who you are without having to speak.
              </p>
              <p
                data-aos="slide-right"
                data-aos-duration="1000"
                data-aos-delay="2700"
                data-aos-easing="ease-in-out"
              >
                Explore creativity that feeds your soul through design
              </p>
            </div>
          </div>
          <div
            id="shifts"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          ></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Page;
