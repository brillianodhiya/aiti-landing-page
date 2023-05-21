import Image from "next/image";
import Link from "next/link";
import React from "react";
Image;
export const TechnologySection = () => {
  return (
    <div className="section section-padding" id="section5">
      <div className="container">
        <div className="section-heading heading-left">
          <span className="subtitle">Service</span>
          <h2 className="title">Technology</h2>
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
                  src="/assets/media/icon/icon-43.png"
                  alt="icon"
                  width={90}
                  height={90}
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service/service-technology">Hosting</Link>
                </h5>
                <p>
                  We design professional looking yet simple Logo. Our designs
                  are search engine and user friendly.
                </p>
                <Link href="/service/service-technology" className="more-btn">
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
                  src="/assets/media/icon/icon-44.png"
                  alt="icon"
                  width={90}
                  height={90}
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service/service-technology">
                    Big data analysis
                  </Link>
                </h5>
                <p>
                  We design professional looking yet simple websites. Our
                  designs are search engine and user friendly.
                </p>
                <Link href="/service/service-technology" className="more-btn">
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
