const Footer = () => {
  return (
    <footer id="footer" className="footer-area">
      <div className="footer-widget">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-logo-support d-md-flex align-items-end justify-content-between">
                <div className="footer-logo d-flex align-items-end">
                  <a className="mt-30" href="index.html">
                    <img src="assets/images/logo.svg" alt="Logo" />
                  </a>
                  <ul className="social mt-30">
                    <li>
                      <a href="#0">
                        <i className="lni-facebook-filled" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="lni-twitter-original" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="lni-instagram-original" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="lni-linkedin-original" />
                      </a>
                    </li>
                  </ul>
                </div>{" "}
                {/* footer logo */}
              </div>{" "}
              {/* footer logo support */}
            </div>
          </div>{" "}
          {/* row */}
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="footer-link">
                <h6 className="footer-title">Company</h6>
                <ul>
                  <li>
                    <a href="#0">About</a>
                  </li>
                  <li>
                    <a href="#0">Contact</a>
                  </li>
                  <li>
                    <a href="#0">Career</a>
                  </li>
                </ul>
              </div>{" "}
              {/* footer link */}
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="footer-link">
                <h6 className="footer-title">Product &amp; Services</h6>
                <ul>
                  <li>
                    <a href="#0">Products</a>
                  </li>
                  <li>
                    <a href="#0">Business</a>
                  </li>
                  <li>
                    <a href="#0">Developer</a>
                  </li>
                </ul>
              </div>{" "}
              {/* footer link */}
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <div className="footer-link">
                <h6 className="footer-title">Help &amp; Suuport</h6>
                <ul>
                  <li>
                    <a href="#0">Support Center</a>
                  </li>
                  <li>
                    <a href="#0">FAQ</a>
                  </li>
                  <li>
                    <a href="#0">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>{" "}
              {/* footer link */}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="footer-newsletter">
                <h6 className="footer-title">Subscribe Newsletter</h6>
                <div className="newsletter">
                  <form action="#">
                    <input type="text" placeholder="Your Email" />
                    <button type="submit">
                      <i className="lni-angle-double-right" />
                    </button>
                  </form>
                </div>
                <p className="text">
                  Subscribe weekly newsletter to stay upto date. We don’t send
                  spam.
                </p>
              </div>{" "}
              {/* footer newsletter */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* footer widget */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright text-center">
                <p className="text">
                  Template Crafted by{" "}
                  <a rel="nofollow" href="https://uideck.com">
                    UIdeck
                  </a>{" "}
                  - UI Powered by{" "}
                  <a el="nofollow" href="https://rebrand.ly/ayroui">
                    AyroUI
                  </a>
                </p>
              </div>
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* footer copyright */}
    </footer>
  )
}

export default Footer
