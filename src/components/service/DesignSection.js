import React from "react";
import Image from "next/image";

export const DesignSection = () => {
  return (
    <>
      <div className="section section-padding" id="section1">
        <div className="container">
          <div className="section-heading heading-left">
            <span className="subtitle">Service</span>
            <h2 className="title">Design</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div className="services-grid service-style-2">
                <div className="thumbnail">
                  <Image
                    src="/assets/media/icon/icon-29.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="service-design.html">Logo &amp; Branding</a>
                  </h5>
                  <p>
                    We design professional looking yet simple Logo. Our designs
                    are search engine and user friendly.
                  </p>
                  <a href="service-design.html" className="more-btn">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <div className="services-grid service-style-2">
                <div className="thumbnail">
                  <Image
                    src="/assets/media/icon/icon-27.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="service-design.html">Website Design</a>
                  </h5>
                  <p>
                    We design professional looking yet simple websites. Our
                    designs are search engine and user friendly.
                  </p>
                  <a href="service-design.html" className="more-btn">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="300"
            >
              <div className="services-grid service-style-2">
                <div className="thumbnail">
                  <Image
                    src="/assets/media/icon/icon-28.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="service-design.html">Mobile app design</a>
                  </h5>
                  <p>
                    We design professional looking yet Mobile Apps. Our designs
                    are search engine and user friendly.
                  </p>
                  <a href="service-design.html" className="more-btn">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div className="services-grid service-style-2">
                <div className="thumbnail">
                  <Image
                    src="/assets/media/icon/icon-4.png"
                    alt="icon"
                    width={102}
                    height={90}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="service-design.html">Graphic/print design</a>
                  </h5>
                  <p>
                    From simple Content Management System to complex eCommerce
                    developer, we cover it all.
                  </p>
                  <a href="service-design.html" className="more-btn">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <div className="services-grid service-style-2">
                <div className="thumbnail">
                  <Image
                    src="/assets/media/icon/icon-30.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="service-design.html">Video production</a>
                  </h5>
                  <p>
                    From simple Content Management System to complex eCommerce
                    developer, we cover it all.
                  </p>
                  <a href="service-design.html" className="more-btn">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
