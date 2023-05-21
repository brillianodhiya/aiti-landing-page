import React from "react";
import Image from "next/image";
import Link from "next/link";

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
                    <Link href="/service/service-design">
                      Logo &amp; Branding
                    </Link>
                  </h5>
                  <p>
                    We design professional looking yet simple Logo. Our designs
                    are search engine and user friendly.
                  </p>
                  <Link href="/service/service-design" className="more-btn">
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
                    src="/assets/media/icon/icon-27.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service/service-design">Website Design</Link>
                  </h5>
                  <p>
                    We design professional looking yet simple websites. Our
                    designs are search engine and user friendly.
                  </p>
                  <Link href="/service/service-design" className="more-btn">
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
                    src="/assets/media/icon/icon-28.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service/service-design">
                      Mobile app design
                    </Link>
                  </h5>
                  <p>
                    We design professional looking yet Mobile Apps. Our designs
                    are search engine and user friendly.
                  </p>
                  <Link href="/service/service-design" className="more-btn">
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
                    src="/assets/media/icon/icon-4.png"
                    alt="icon"
                    width={102}
                    height={90}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service/service-design">
                      Graphic/print design
                    </Link>
                  </h5>
                  <p>
                    From simple Content Management System to complex eCommerce
                    developer, we cover it all.
                  </p>
                  <Link href="/service/service-design" className="more-btn">
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
                    src="/assets/media/icon/icon-30.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service/service-design">Video production</Link>
                  </h5>
                  <p>
                    From simple Content Management System to complex eCommerce
                    developer, we cover it all.
                  </p>
                  <Link href="/service/service-design" className="more-btn">
                    Find out more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
