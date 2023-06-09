import Image from "next/image";
import React from "react";

export const Banner = () => {
  return (
    <div className="breadcrum-area breadcrumb-banner">
      <div className="container">
        <div
          className="section-heading heading-left"
          data-sal="slide-right"
          data-sal-duration="1000"
          data-sal-delay="300"
        >
          <h1 className="title h2">Our projects</h1>
          <p>
            A quick view of industry specific problems solved with design by the
            awesome team at Abstrak.
          </p>
        </div>
        <div
          className="banner-thumbnail"
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="400"
        >
          <Image
            className="paralax-image"
            src="/assets/media/banner/banner-thumb-1.png"
            alt="Illustration"
            width={1007}
            height={716}
          />
        </div>
      </div>
      <ul className="shape-group-8 list-unstyled">
        <li
          className="shape shape-1"
          data-sal="slide-right"
          data-sal-duration="500"
          data-sal-delay="100"
        >
          <Image
            src="/assets/media/others/bubble-9.png"
            alt="Bubble"
            width={377}
            height={330}
          />
        </li>
        <li
          className="shape shape-2"
          data-sal="slide-left"
          data-sal-duration="500"
          data-sal-delay="200"
        >
          <Image
            src="/assets/media/others/bubble-20.png"
            alt="Bubble"
            width={565}
            height={862}
          />
        </li>
        <li
          className="shape shape-3"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="300"
        >
          <Image
            src="/assets/media/others/line-4.png"
            alt="Line"
            width={1682}
            height={445}
          />
        </li>
      </ul>
    </div>
  );
};
