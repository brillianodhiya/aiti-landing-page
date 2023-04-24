import About from "@aiti/components/About";
import Banner from "@aiti/components/Banner";
import Blog from "@aiti/components/Blog";
import Brand from "@aiti/components/Brand";
import CallToAction from "@aiti/components/CallToAction";
import CaseStudy from "@aiti/components/CaseStudy";
import CenterUp from "@aiti/components/CenterUp";
import Footer from "@aiti/components/Footer";
import Headers from "@aiti/components/Headers";
import Pricing from "@aiti/components/Pricing";
import Projects from "@aiti/components/Projects";
import SciprtThirdParty from "@aiti/components/SciprtThirdParty";
import ServiceArea from "@aiti/components/ServiceArea";
import Testimonial from "@aiti/components/Testimonial";
import ThemeSwitcher from "@aiti/components/ThemeSwitcher";
import useBackToTop from "@aiti/hooks/useBackToTop";
import useMobileMenuActivation from "@aiti/hooks/useMobileMenuActivation";
import Head from "next/head";
import Link from "next/link";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useMobileMenuActivation();
  useBackToTop();

  return (
    <>
      <Head>
        <title>AITI | Ali Inovasi Teknologi Indonesia</title>
        <meta
          name="description"
          content="Ali Inovasi Teknologi Indonesia (AITI) is a technology company that provides innovative solutions to various industries. Our company aims to bring cutting-edge technology to our clients to help them improve their business performance and efficiency. Explore our website to learn more about our services and products."
        />
        <meta
          name="keywords"
          content="Ali Inovasi Teknologi Indonesia, AITI, technology company, innovative solutions, cutting-edge technology, business performance, efficiency, services, products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/media/favicon.png"
        />
      </Head>
      <SciprtThirdParty />
      <main>
        {/*[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  	<![endif]*/}
        <a href="#main-wrapper" id="backto-top" className="back-to-top">
          <i className="far fa-angle-double-up" />
        </a>
        {/* Preloader Start Here */}
        <div id="preloader" />
        {/* Preloader End Here */}
        <ThemeSwitcher />
        <div id="main-wrapper" className="main-wrapper">
          {/*=====================================*/}
          {/*=        Header Area Start       	=*/}
          {/*=====================================*/}
          <Headers />
          {/*=====================================*/}
          {/*=        Banner Area Start         =*/}
          {/*=====================================*/}
          <Banner />
          {/*=====================================*/}
          {/*=        Service Area Start         =*/}
          {/*=====================================*/}
          <ServiceArea />
          {/*=====================================*/}
          {/*=       Case Study Area Start       =*/}
          {/*=====================================*/}
          <CaseStudy />
          {/*=====================================*/}
          {/*=        About Area Start         =*/}
          {/*=====================================*/}
          <About />
          {/*=====================================*/}
          {/*=        Project Area Start         =*/}
          {/*=====================================*/}
          <Projects />
          {/*=====================================*/}
          {/*=        Counter Up Area Start      =*/}
          {/*=====================================*/}
          <CenterUp />
          {/*=====================================*/}
          {/*=        Testimonial Area Start      =*/}
          {/*=====================================*/}
          <Testimonial />
          {/*=====================================*/}
          {/*=        Pricing Area Start       	=*/}
          {/*=====================================*/}
          <Pricing />
          {/*=====================================*/}
          {/*=        Brand Area Start       	=*/}
          {/*=====================================*/}
          <Brand />
          {/*=====================================*/}
          {/*=        Blog Area Start       	    =*/}
          {/*=====================================*/}
          <Blog />
          {/*=====================================*/}
          {/*=     Call To Action Area Start     =*/}
          {/*=====================================*/}
          <CallToAction />
          {/*=====================================*/}
          {/*=        Footer Area Start       	=*/}
          {/*=====================================*/}
          <Footer />
          {/*=====================================*/}
          {/*=       Offcanvas Menu Area       	=*/}
          {/*=====================================*/}
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
                          Karangsoko, RT 020 RW005 <br /> Trenggalek,
                          Trenggalek, Jawa Timur, Indonesia
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
        </div>
      </main>
    </>
  );
}
