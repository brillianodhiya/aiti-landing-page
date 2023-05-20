import React from "react";
import Image from "next/image";
export const BusinessSection = () => {
  return (
    <div className="section section-padding bg-color-light" id="section4">
      <div className="container">
        <div className="section-heading heading-left">
          <span className="subtitle">Service</span>
          <h2 className="title">Business</h2>
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
                  height={90}
                  width={90}
                  src="/assets/media/icon/icon-39.png"
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="service-business.html">Digital strategy</a>
                </h5>
                <p>
                  We design professional looking yet simple Logo. Our designs
                  are search engine and user friendly.
                </p>
                <a href="service-business.html" className="more-btn">
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
                  height={90}
                  width={90}
                  src="/assets/media/icon/icon-40.png"
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="service-business.html">Business consulting</a>
                </h5>
                <p>
                  We design professional looking yet simple websites. Our
                  designs are search engine and user friendly.
                </p>
                <a href="service-business.html" className="more-btn">
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
                  height={90}
                  width={90}
                  src="/assets/media/icon/icon-41.png"
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="service-business.html">Content writing</a>
                </h5>
                <p>
                  We design professional looking yet Mobile Apps. Our designs
                  are search engine and user friendly.
                </p>
                <a href="service-business.html" className="more-btn">
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
                  height={90}
                  width={90}
                  src="/assets/media/icon/icon-42.png"
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="service-business.html">Reporting</a>
                </h5>
                <p>
                  We design professional looking yet Mobile Apps. Our designs
                  are search engine and user friendly.
                </p>
                <a href="service-business.html" className="more-btn">
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
