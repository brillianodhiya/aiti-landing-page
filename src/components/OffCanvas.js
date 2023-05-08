import Link from "next/link";
import React from "react";

const OffCanvas = () => {
  return (
    <div
      className="offcanvas offcanvas-end header-offcanvasmenu"
      tabIndex={-1}
      id="offcanvasMenuRight"
    >
      <div className="offcanvas-header">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <form action="#" className="side-nav-search-form">
          <div className="form-group">
            <input
              type="text"
              className="search-field"
              name="search-field"
              placeholder="Search..."
            />
            <button className="side-nav-search-btn">
              <i className="fas fa-search" />
            </button>
          </div>
        </form>
        <div className="row ">
          <div className="col-lg-5 col-xl-6">
            <ul className="main-navigation list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/service">Service</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/our-team">Our Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 col-xl-6">
            <div className="contact-info-wrap">
              <div className="contact-inner">
                <address className="address">
                  <span className="title">Contact Information</span>
                  <p>
                    Karangsoko, RT 020 RW005 <br /> Trenggalek, Trenggalek, Jawa
                    Timur, Indonesia
                  </p>
                </address>
                <address className="address">
                  <span className="title">
                    {"We're"} Available 24/7. Call Now.
                  </span>
                  <a className="tel" href="tel:6285155436866">
                    <i className="fas fa-phone" />
                    +62 8515-5436-866
                  </a>
                  <a className="tel" href="tel:6288907002408">
                    <i className="fas fa-phone" />
                    +62 8890-7002-408
                  </a>
                  {/* <a className="tel" href="tel:12125553333">
                          <i className="fas fa-fax" />
                          (121) 255-53333
                        </a> */}
                </address>
              </div>
              <div className="contact-inner">
                <h5 className="title">Find us here</h5>
                <div className="contact-social-share">
                  <ul className="social-share list-unstyled">
                    <li>
                      <Link href="https://facebook.com/aiti.id">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com/aiti">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://dribbble.com">
                        <i className="fab fa-behance" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/in/brilliano-dhiya-ulhaq-44b196194/">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
