import Image from "next/image";
import Link from "next/link";
import React from "react";

const CaseStudy = () => {
  return (
    <section className="section section-padding-equal case-study-featured-area">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-5 col-lg-6"
            data-sal="slide-right"
            data-sal-duration={800}
          >
            <div
              className="slick-slider slick-dot-nav featured-content"
              data-slick='{"infinite": true,"arrows": false, "dots": true, "slidesToShow": 1, "asNavFor": ".featured-thumbnail"}'
            >
              <div className="slick-slide">
                <div className="case-study-featured">
                  <div className="section-heading heading-left">
                    <span className="subtitle">Featured Case Study</span>
                    <h2 className="title">
                      Logo, identity &amp; web design for Uber
                    </h2>
                    <p>
                      Donec metus lorem, vulputate at sapien sit amet, auctor
                      iaculis lorem. In vel hendrerit nisi. Vestibulum eget
                      risus velit. Aliquam tristique libero at dui sodales, et
                      placerat orci lobortis.
                    </p>
                    <p>
                      Maecenas ipsum neque, elementum id dignissim et, imperdiet
                      vitae mauris.
                    </p>
                    <Link
                      href="/single-case-study"
                      className="axil-btn btn-fill-primary btn-large"
                    >
                      Read Case Study
                    </Link>
                  </div>
                  <div className="case-study-counterup">
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count">15</span>
                        <span className="symbol">%</span>
                      </h2>
                      <span className="counter-title">ROI increase</span>
                    </div>
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count">60</span>
                        <span className="symbol">k</span>
                      </h2>
                      <span className="counter-title">
                        Monthly website visits
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slick-slide">
                <div className="case-study-featured">
                  <div className="section-heading heading-left">
                    <span className="subtitle">Featured Case Study</span>
                    <h2 className="title">
                      Website and web Development, Design
                    </h2>
                    <p>
                      Donec metus lorem, vulputate at sapien sit amet, auctor
                      iaculis lorem. In vel hendrerit nisi. Vestibulum eget
                      risus velit. Aliquam tristique libero at dui sodales, et
                      placerat orci lobortis.
                    </p>
                    <p>
                      Maecenas ipsum neque, elementum id dignissim et, imperdiet
                      vitae mauris.
                    </p>
                    <Link
                      href="/single-case-study"
                      className="axil-btn btn-fill-primary btn-large"
                    >
                      Read Case Study
                    </Link>
                  </div>
                  <div className="case-study-counterup">
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count">15</span>
                        <span className="symbol">%</span>
                      </h2>
                      <span className="counter-title">ROI increase</span>
                    </div>
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count">60</span>
                        <span className="symbol">k</span>
                      </h2>
                      <span className="counter-title">
                        Monthly website visits
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slick-slide">
                <div className="case-study-featured">
                  <div className="section-heading heading-left">
                    <span className="subtitle">Featured Case Study</span>
                    <h2 className="title">
                      Branding, website &amp; digital marketing for Apple
                    </h2>
                    <p>
                      Donec metus lorem, vulputate at sapien sit amet, auctor
                      iaculis lorem. In vel hendrerit nisi. Vestibulum eget
                      risus velit. Aliquam tristique libero at dui sodales, et
                      placerat orci lobortis.
                    </p>
                    <p>
                      Maecenas ipsum neque, elementum id dignissim et, imperdiet
                      vitae mauris.
                    </p>
                    <Link
                      href="/single-case-study"
                      className="axil-btn btn-fill-primary btn-large"
                    >
                      Read Case Study
                    </Link>
                  </div>
                  <div className="case-study-counterup">
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count">15</span>
                        <span className="symbol">%</span>
                      </h2>
                      <span className="counter-title">ROI increase</span>
                    </div>
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count">60</span>
                        <span className="symbol">k</span>
                      </h2>
                      <span className="counter-title">
                        Monthly website visits
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-7 col-lg-6 d-none d-lg-block"
            data-sal="slide-left"
            data-sal-duration={800}
          >
            <div
              className="slick-slider slick-dot-nav featured-thumbnail"
              data-slick='{"infinite": true,"arrows": false, "dots": false, "fade": true, "slidesToShow": 1, "asNavFor": ".featured-content"}'
            >
              <div className="slick-slide">
                <div className="case-study-featured-thumb">
                  <Image
                    width={740}
                    height={740}
                    src="/assets/media/others/case-study-4.png"
                    alt="travel"
                  />
                </div>
              </div>
              <div className="slick-slide">
                <div className="case-study-featured-thumb">
                  <Image
                    width={740}
                    height={740}
                    src="/assets/media/others/case-study-5.png"
                    alt="travel"
                  />
                </div>
              </div>
              <div className="slick-slide">
                <div className="case-study-featured-thumb">
                  <Image
                    width={740}
                    height={740}
                    src="/assets/media/others/case-study-6.png"
                    alt="travel"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
