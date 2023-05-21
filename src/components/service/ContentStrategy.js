import React from "react";
import Image from "next/image";
import Link from "next/link";
export const ContentStrategy = () => {
  return (
    <div className="section section-padding bg-color-light" id="section6">
      <div className="container">
        <div className="section-heading heading-left">
          <span className="subtitle">Service</span>
          <h2 className="title">Content strategy</h2>
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
                  src="/assets/media/icon/icon-45.png"
                  alt="icon"
                  width={90}
                  height={90}
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service/service-content-strategy">
                    Web Audit Practices
                  </Link>
                </h5>
                <p>
                  industry-icon-1 Web Audit Practices A reputable marketing
                  strategy company runs a complete digital,
                </p>
                <Link
                  href="/service/service-content-strategy"
                  className="more-btn"
                >
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
                  src="/assets/media/icon/icon-46.png"
                  alt="icon"
                  width={90}
                  height={90}
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service/service-content-strategy">
                    Marketing Flexibility
                  </Link>
                </h5>
                <p>
                  Do you cater to other businesses, investors, decision-makers
                  or consumers? A trustworthy digital
                </p>
                <Link
                  href="/service/service-content-strategy"
                  className="more-btn"
                >
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
                  src="/assets/media/icon/icon-47.png"
                  alt="icon"
                  width={90}
                  height={90}
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service/service-content-strategy">
                    Advertising Strategy
                  </Link>
                </h5>
                <p>
                  Promoting your products and services online requires
                  cutting-edge organic and paid search strategies to rise
                </p>
                <Link
                  href="/service/service-content-strategy"
                  className="more-btn"
                >
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
