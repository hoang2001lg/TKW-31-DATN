import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <><div>
  {/* Page Preloder */}
  <div id="preloder">
    <div className="loader" />
  </div>
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
        <li><Link to="./index.html">Home</Link></li>
        <li><Link to="./about-us.html">About Us</Link></li>
        <li><Link to="./classes.html">Classes</Link></li>
        <li><Link to="./services.html">Services</Link></li>
        <li><Link to="./team.html">Our Team</Link></li>
        <li><Link to="#">Pages</Link>
          <ul className="dropdown">
            <li><Link to="./about-us.html">About us</Link></li>
            <li><Link to="./class-timetable.html">Classes timetable</Link></li>
            <li><Link to="./bmi-calculator.html">Bmi calculate</Link></li>
            <li><Link to="./team.html">Our team</Link></li>
            <li><Link to="./gallery.html">Gallery</Link></li>
            <li><Link to="./blog.html">Our blog</Link></li>
            <li><Link to="./404.html">404</Link></li>
          </ul>
        </li>
        <li><Link to="./contact.html">Contact</Link></li>
      </ul>
    </nav>
    <div id="mobile-menu-wrap" />
    <div className="canvas-social">
      <Link to="#"><i className="fa fa-facebook" /></Link>
      <Link to="#"><i className="fa fa-twitter" /></Link>
      <Link to="#"><i className="fa fa-youtube-play" /></Link>
      <Link to="#"><i className="fa fa-instagram" /></Link>
    </div>
  </div>
  {/* Offcanvas Menu Section End */}
  {/* Header Section Begin */}
  <header className="header-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <div className="logo">
            <Link to="./index.html">
              <img src="img/logo.png"  />
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="nav-menu">
            <ul>
              <li><Link to="./index.html">Home</Link></li>
              <li className="active"><Link to="./about-us.html">About Us</Link></li>
              <li><Link to="./class-details.html">Classes</Link></li>
              <li><Link to="./services.html">Services</Link></li>
              <li><Link to="./team.html">Our Team</Link></li>
              <li><Link to="#">Pages</Link>
                <ul className="dropdown">
                  <li><Link to="./about-us.html">About us</Link></li>
                  <li><Link to="./class-timetable.html">Classes timetable</Link></li>
                  <li><Link to="./bmi-calculator.html">Bmi calculate</Link></li>
                  <li><Link to="./team.html">Our team</Link></li>
                  <li><Link to="./gallery.html">Gallery</Link></li>
                  <li><Link to="./blog.html">Our blog</Link></li>
                  <li><Link to="./404.html">404</Link></li>
                </ul>
              </li>
              <li><Link to="./contact.html">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3">
          <div className="top-option">
            <div className="to-search search-switch">
              <i className="fa fa-search" />
            </div>
            <div className="to-social">
              <Link to="#"><i className="fa fa-facebook" /></Link>
              <Link to="#"><i className="fa fa-twitter" /></Link>
              <Link to="#"><i className="fa fa-youtube-play" /></Link>
              <Link to="#"><i className="fa fa-instagram" /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="canvas-open">
        <i className="fa fa-bars" />
      </div>
    </div>
  </header>
  {/* Header End */}
</div>

    </>
  )
}

export default Header