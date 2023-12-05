import React from "react";
import Image from "next/image";
import Link from "next/link";

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
                  <Link href="/service/content-management">
                    Content Management
                  </Link>
                </h5>
                <p>
                  We design professional looking yet simple Logo. Our designs
                  are search engine and user friendly.
                </p>
                <Link href="/service/content-management" className="more-btn">
                  Find out more
                </Link>
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
                  <Link href="/service/mobile-app">Mobile app development</Link>
                </h5>
                <p>
                  We design professional looking yet simple websites. Our
                  designs are search engine and user friendly.
                </p>
                <Link href="/service/mobile-app" className="more-btn">
                  Find out more
                </Link>
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
                  <Link href="/service/e-commerce">eCommerce</Link>
                </h5>
                <p>
                  We design professional looking yet Mobile Apps. Our designs
                  are search engine and user friendly.
                </p>
                <Link href="/service/e-commerce" className="more-btn">
                  Find out more
                </Link>
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
                  src="/assets/media/icon/icon-31.png"
                  width={90}
                  height={90}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service/iot-monitoring">IoT Monitoring</Link>
                </h5>
                <p>
                  We design professional looking yet simple Logo. Our designs
                  are search engine and user friendly.
                </p>
                <Link href="/service/iot-monitoring" className="more-btn">
                  Find out more
                </Link>
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
                  <Link href="/service/blogger">Blogger</Link>
                </h5>
                <p>
                  We design professional looking yet simple websites. Our
                  designs are search engine and user friendly.
                </p>
                <Link href="/service/blogger" className="more-btn">
                  Find out more
                </Link>
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
                  <Link href="/service/invitation">Undangan</Link>
                </h5>
                <p>
                  We design professional looking yet Mobile Apps. Our designs
                  are search engine and user friendly.
                </p>
                <Link href="/service/invitation" className="more-btn">
                  Find out more
                </Link>
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
                  <Link href="/service/landing-page">Landing Page</Link>
                </h5>
                <p>
                  We design professional looking yet Mobile Apps. Our designs
                  are search engine and user friendly.
                </p>
                <Link href="/service/landing-page" className="more-btn">
                  Find out more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
