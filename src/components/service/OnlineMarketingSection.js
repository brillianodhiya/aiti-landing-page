import React from "react";
import Image from "next/image";

export const OnlineMarketingSection = () => {
  return (
    <div className="section section-padding" id="section3">
      <div className="container">
        <div className="section-heading heading-left">
          <span className="subtitle">Service</span>
          <h2 className="title">Online Marketing</h2>
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
                  src="/assets/media/icon/icon-34.png"
                  alt="icon"
                  height={90}
                  width={90}
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="service-marketing.html">SEO</a>
                </h5>
                <p>
                  We design professional looking yet simple Logo. Our designs
                  are search engine and user friendly.
                </p>
                <a href="service-marketing.html" className="more-btn">
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
                  src="/assets/media/icon/icon-35.png"
                  alt="icon"
                  height={90}
                  width={90}
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="service-marketing.html">Pay-per click</a>
                </h5>
                <p>
                  We design professional looking yet simple websites. Our
                  designs are search engine and user friendly.
                </p>
                <a href="service-marketing.html" className="more-btn">
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
                  src="/assets/media/icon/icon-36.png"
                  alt="icon"
                  height={90}
                  width={90}
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="service-marketing.html">Email marketing</a>
                </h5>
                <p>
                  We design professional looking yet Mobile Apps. Our designs
                  are search engine and user friendly.
                </p>
                <a href="service-marketing.html" className="more-btn">
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
                  src="/assets/media/icon/icon-37.png"
                  alt="icon"
                  height={90}
                  width={90}
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="service-marketing.html">Display marketing</a>
                </h5>
                <p>
                  From simple Content Management System to complex eCommerce
                  developer, we cover it all.
                </p>
                <a href="service-marketing.html" className="more-btn">
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
                  src="/assets/media/icon/icon-38.png"
                  alt="icon"
                  height={90}
                  width={90}
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="service-marketing.html">Social Media marketing</a>
                </h5>
                <p>
                  From simple Content Management System to complex eCommerce
                  developer, we cover it all.
                </p>
                <a href="service-marketing.html" className="more-btn">
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
