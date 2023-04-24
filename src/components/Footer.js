import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-top">
          <div className="footer-social-link">
            <ul className="list-unstyled">
              <li>
                <Link
                  href="https://facebook.com/aiti.id"
                  data-sal="slide-up"
                  data-sal-duration={500}
                  data-sal-delay={100}
                >
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/aiti"
                  data-sal="slide-up"
                  data-sal-duration={500}
                  data-sal-delay={200}
                >
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.pinterest.com"
                  data-sal="slide-up"
                  data-sal-duration={500}
                  data-sal-delay={300}
                >
                  <i className="fab fa-pinterest-p" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/brilliano-dhiya-ulhaq-44b196194/"
                  data-sal="slide-up"
                  data-sal-duration={500}
                  data-sal-delay={400}
                >
                  <i className="fab fa-linkedin-in" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/brilliano_d/"
                  data-sal="slide-up"
                  data-sal-duration={500}
                  data-sal-delay={500}
                >
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://vimeo.com"
                  data-sal="slide-up"
                  data-sal-duration={500}
                  data-sal-delay={600}
                >
                  <i className="fab fa-vimeo-v" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://dribbble.com"
                  data-sal="slide-up"
                  data-sal-duration={500}
                  data-sal-delay={700}
                >
                  <i className="fab fa-dribbble" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.behance.net"
                  data-sal="slide-up"
                  data-sal-duration={500}
                  data-sal-delay={800}
                >
                  <i className="fab fa-behance" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-main">
          <div className="row">
            <div
              className="col-xl-6 col-lg-5"
              data-sal="slide-right"
              data-sal-duration={800}
              data-sal-delay={100}
            >
              <div className="footer-widget border-end">
                <div className="footer-newsletter">
                  <h2 className="title">Get in touch!</h2>
                  <p>
                    Fusce varius, dolor tempor interdum tristique, dui urna bib
                    endum magna, ut ullamcorper purus
                  </p>
                  <form>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                      />
                      <button className="subscribe-btn" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-7"
              data-sal="slide-left"
              data-sal-duration={800}
              data-sal-delay={100}
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-widget">
                    <h6 className="widget-title">Services</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link href="/service/design">
                            Logo &amp; Branding
                          </Link>
                        </li>
                        <li>
                          <Link href="/service/development">
                            Website Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/service/development">
                            Mobile App Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/service/marketing">
                            Search Engine Optimization
                          </Link>
                        </li>
                        <li>
                          <Link href="/service/marketing">Pay-Per-Click</Link>
                        </li>
                        <li>
                          <Link href="/service/marketing">
                            Social Media Marketing
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Resourses</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link href="/case-study">Case Studies</Link>
                        </li>
                        <li>
                          <Link href="/project">Portfolio</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Support</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="/terms-of-use">Terms of Use</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-bottom"
          data-sal="slide-up"
          data-sal-duration={500}
          data-sal-delay={100}
        >
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <span className="copyright-text">
                  © {dayjs().format("YYYY")}. Made by ❤{" "}
                  <Link href="https://instagram.com/">AITI Team.</Link>.
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-link">
                <ul className="list-unstyled">
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-of-use">Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
