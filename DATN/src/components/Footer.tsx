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

const Footer = (props: Props) => {
  return (
    <div>
  <div className="gettouch-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="gt-text">
            <i className="fa fa-map-marker" />
            <p>333 Middle Winchendon Rd, Rindge,<br /> NH 03461</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gt-text">
            <i className="fa fa-mobile" />
            <ul>
              <li>125-711-811</li>
              <li>125-668-886</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gt-text email">
            <i className="fa fa-envelope" />
            <p>Support.gymcenter@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Get In Touch Section End */}
  {/* Footer Section Begin */}
  <section className="footer-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="fs-about">
            <div className="fa-logo">
              <a href="#"><img src={LogoWebSite} alt="" /></a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices gravida lorem.</p>
            <div className="fa-social">
              <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-youtube-play" /></a>
              <a href="#"><i className="fa fa-instagram" /></a>
              <a href="#"><i className="fa  fa-envelope-o" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="fs-widget">
            <h4>Useful links</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Classes</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="fs-widget">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">My account</a></li>
              <li><a href="#">Subscribe</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="fs-widget">
            <h4>Tips &amp; Guides</h4>
            <div className="fw-recent">
              <h6><a href="#">Physical fitness may help prevent depression, anxiety</a></h6>
              <ul>
                <li>3 min read</li>
                <li>20 Comment</li>
              </ul>
            </div>
            <div className="fw-recent">
              <h6><a href="#">Fitness: The best exercise to lose belly fat and tone up...</a></h6>
              <ul>
                <li>3 min read</li>
                <li>20 Comment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Footer