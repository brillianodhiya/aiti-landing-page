import React from "react";
import Image from "next/image";

export const DevelopmentSection = () => {
  return (
    <div className="section section-padding bg-color-light" id="section2">
      <div className="container">
        <div className="section-heading heading-left">
          <span className="subtitle">Service</span>
          <h2 className="title">Development</h2>
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
                  src="/assets/media/icon/icon-31.png"
                  width={90}
                  height={90}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="service-development.html">Content Managment</a>
                </h5>
                <p>
                  We design professional looking yet simple Logo. Our designs
                  are search engine and user friendly.
                </p>
                <a href="service-development.html" className="more-btn">
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
                  src="/assets/media/icon/icon-32.png"
                  width={90}
                  height={90}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="service-development.html">Mobile app development</a>
                </h5>
                <p>
                  We design professional looking yet simple websites. Our
                  designs are search engine and user friendly.
                </p>
                <a href="service-development.html" className="more-btn">
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
                  src="/assets/media/icon/icon-33.png"
                  width={90}
                  height={90}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="service-development.html">eCommerce</a>
                </h5>
                <p>
                  We design professional looking yet Mobile Apps. Our designs
                  are search engine and user friendly.
                </p>
                <a href="service-development.html" className="more-btn">
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
