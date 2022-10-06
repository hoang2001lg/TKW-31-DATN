import React from 'react'
import "../templace/css/bootstrap.min.css";
import "../templace/css/font-awesome.min.css";
import "../templace/css/flaticon.css";
import "../templace/css/owl.carousel.min.css";
import "../templace/css/barfiller.css";
import "../templace/css/magnific-popup.css";
import "../templace/css/slicknav.min.css";
import "../templace/css/style.css";
import LogoWebSite from '../templace/img/logo.png'
type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      {/* Offcanvas Menu Section Begin */}
      <div className="offcanvas-menu-overlay" />
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="fa fa-close" />
        </div>
        <div className="canvas-search search-switch">
          <i className="fa fa-search" />
        </div>
        <nav className="canvas-menu mobile-menu">
          <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./about-us.html">About Us</a></li>
            <li><a href="./classes.html">Classes</a></li>
            <li><a href="./services.html">Services</a></li>
            <li><a href="./team.html">Our Team</a></li>
            <li><a href="#">Pages</a>
              <ul className="dropdown">
                <li><a href="./about-us.html">About us</a></li>
                <li><a href="./class-timetable.html">Classes timetable</a></li>
                <li><a href="./bmi-calculator.html">Bmi calculate</a></li>
                <li><a href="./team.html">Our team</a></li>
                <li><a href="./gallery.html">Gallery</a></li>
                <li><a href="./blog.html">Our blog</a></li>
                <li><a href="./404.html">404</a></li>
              </ul>
            </li>
            <li><a href="./contact.html">Contact</a></li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap" />
        <div className="canvas-social">
          <a href="#"><i className="fa fa-facebook" /></a>
          <a href="#"><i className="fa fa-twitter" /></a>
          <a href="#"><i className="fa fa-youtube-play" /></a>
          <a href="#"><i className="fa fa-instagram" /></a>
        </div>
      </div>
      {/* Offcanvas Menu Section End */}
      {/* Header Section Begin */}
      <header className="header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <a href="./index.html">
                  <img src={LogoWebSite} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="nav-menu">
                <ul>
                  <li className="active"><a href="./index.html">Home</a></li>
                  <li><a href="./about-us.html">About Us</a></li>
                  <li><a href="./class-details.html">Classes</a></li>
                  <li><a href="./services.html">Services</a></li>
                  <li><a href="./team.html">Our Team</a></li>
                  <li><a href="#">Pages</a>
                  </li>
                  <li><a href="./contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="top-option">
                <div className="to-search search-switch">
                  <i className="fa fa-search" />
                </div>
                <div className="to-social">
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-twitter" /></a>
                  <a href="#"><i className="fa fa-youtube-play" /></a>
                  <a href="#"><i className="fa fa-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas-open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
    </div>

  )
}

export default Header