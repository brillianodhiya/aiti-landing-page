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
              {/* <li>
                <Link
                  href="https://twitter.com/aiti"
                  data-sal="slide-up"
                  data-sal-duration={500}
                  data-sal-delay={200}
                >
                  <i className="fab fa-twitter" />
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="https://www.pinterest.com"
                  data-sal="slide-up"
                  data-sal-duration={500}
                  data-sal-delay={300}
                >
                  <i className="fab fa-pinterest-p" />
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="https://www.linkedin.com/in/brilliano-dhiya-ulhaq-44b196194/"
                  data-sal="slide-up"
                  data-sal-duration={500}
                  data-sal-delay={400}
                >
                  <i className="fab fa-linkedin-in" />
                </Link>
              </li> */}
              <li>
                <Link
                  href="https://www.instagram.com/aiti_lokal/"
                  data-sal="slide-up"
                  data-sal-duration={500}
                  data-sal-delay={500}
                >
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              {/* <li>
                <Link
                  href="https://vimeo.com"
                  data-sal="slide-up"
                  data-sal-duration={500}
                  data-sal-delay={600}
                >
                  <i className="fab fa-vimeo-v" />
                </Link>
              </li> */}
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
                  <h2 className="title">Dapatkan berita terbaru.</h2>
                  <p>
                    Dapatkan berita terbaru dari kami, kami akan mengirimkan
                    berita terbaru dari kami ke email anda.
                  </p>
                  <form>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Alamat Email"
                      />
                      <button className="subscribe-btn" type="submit">
                        Langganan
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
                          <Link href="/service/design">Desain Logo</Link>
                        </li>
                        <li>
                          <Link href="/service/development">
                            Pengembangan Website
                          </Link>
                        </li>
                        <li>
                          <Link href="/service/development">
                            Pengembangan Aplikasi Mobile
                          </Link>
                        </li>
                        <li>
                          <Link href="/service/development">
                            Pengembangan Aplikasi Desktop
                          </Link>
                        </li>
                        <li>
                          <Link href="/service/design">Desain Grafis</Link>
                        </li>
                        <li>
                          <Link href="/service/development">
                            Pengembangan Sistem Informasi
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="footer-widget">
                    <h6
                      className="widget-title"
                      style={{
                        fontSize: "28px",
                      }}
                    >
                      Butuh diskusi <br /> dengan tim kami?
                    </h6>
                    <div className="footer-menu-link">
                      <iframe
                        src="https://discord.com/widget?id=1101411459294056478&theme=dark"
                        width="350"
                        height="200"
                        allowtransparency="true"
                        frameBorder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                      ></iframe>
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
                  <Link href="https://instagram.com/aiti_lokal" target="_blank">
                    AITI Team.
                  </Link>
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
