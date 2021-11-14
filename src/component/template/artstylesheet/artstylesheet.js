import '../artstylesheet/artstylesheet.css';
import React from 'react';
import img1 from '../../../images/css1/pic.jpg';
import img2 from '../../../images/css1/p1.jpg';
import img3 from '../../../images/css1/p2.jpg';
import img4 from '../../../images/css1/p3.jpg';
import img5 from '../../../images/css1/p4.jpg';
import img6 from '../../../images/css1/p5.jpg';
import img7 from '../../../images/css1/p6.jpg';

const ArtSheet = props => {
  return (
    <div className="whole">
      <header className="header">
        <div className="header-search-nav">
          <div className="search-nav-img">LOGO</div>
          <div className="header-searchbar">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header-nav-links">
          <ul className="navlist-links">
            <li className="navlist-link">About</li>
            <li className="navlist-link">Contact us</li>
            <li className="navlist-link">Blog</li>
          </ul>
        </div>
      </header>
      <main className="main">
        <div className="display-img">
          <img src={img1} alt="flower" />
        </div>
        <div className="main-sections">
          <section className="main-section">
            <h1>Art</h1>
            <p>
              The expression or application of human creative skill and imagination, producing works
              to be appreciated primarily for their beauty or <i>emotional</i> power
            </p>
            <button>Discover</button>
          </section>
          <section className="main-section" id="center">
            <h1>“Every artist was first an amateur”</h1>
            <p>Ralph Waldo Emerson</p>
            <button>Discover</button>
          </section>
          <section className="main-section" id="end">
            <h1>Pablo Picasso</h1>
            <h1>Bob Ross</h1>
            <h1>Horace</h1>
            <h1>Ralph Waldo Emerson</h1>
            <p>“Every artist was first an amateur”</p>
          </section>
        </div>
        <div className="containers-container">
          <div className="containers">
            <div className="container">
              <img src={img2} alt="display" />
              <div className="container-desc"></div>
            </div>
            <div className="container">
              <img src={img3} alt="display" />
              <div className="container-desc"></div>
            </div>
            <div className="container">
              <img src={img4} alt="display" />
              <div className="container-desc"></div>
            </div>
          </div>
          <div className="containers">
            <div className="container">
              <img src={img5} alt="display" />
              <div className="container-desc"></div>
            </div>
            <div className="container">
              <img src={img6} alt="display" />
              <div className="container-desc"></div>
            </div>
            <div className="container">
              <img src={img7} alt="display" />
              <div className="container-desc"></div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-list">
          <ul className="footer-links">
            <li className="footer-link">Test</li>
            <li className="footer-link">Test</li>
            <li className="footer-link">Test</li>
          </ul>
          <ul className="footer-links">
            <li className="footer-link">Test</li>
            <li className="footer-link">Test</li>
            <li className="footer-link">Test</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default ArtSheet;
