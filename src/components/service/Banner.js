import React from "react";
import Image from "next/image";
export const Banner = () => {
  return (
    <div className="breadcrum-area breadcrumb-banner">
      <div className="container">
        <div
          className="section-heading heading-left"
          data-sal="slide-right"
          data-sal-duration={1000}
          data-sal-delay={300}
        >
          <h1 className="title h2">Best solutions for your business</h1>
          <p>
            Give your business a unique logo to stand out from crowd. We’ll
            create logo specifically for your company.
          </p>
        </div>
        <div
          className="banner-thumbnail"
          data-sal="slide-up"
          data-sal-duration={1000}
          data-sal-delay={400}
        >
          <Image
            width={1047}
            height={727}
            priority
            className="paralax-image"
            src="/assets/media/banner/banner-thumb-4.png"
            alt="Illustration"
          />
        </div>
      </div>
      <ul className="shape-group-8 list-unstyled">
        <li
          className="shape shape-1"
          data-sal="slide-right"
          data-sal-duration={500}
          data-sal-delay={100}
        >
          <Image
            width={377}
            height={330}
            src="/assets/media/others/bubble-9.png"
            alt="Bubble"
          />
        </li>
        <li
          className="shape shape-2"
          data-sal="slide-left"
          data-sal-duration={500}
          data-sal-delay={200}
        >
          <Image
            width={565}
            height={862}
            src="/assets/media/others/bubble-21.png"
            alt="Bubble"
          />
        </li>
        <li
          className="shape shape-3"
          data-sal="slide-up"
          data-sal-duration={500}
          data-sal-delay={300}
        >
          <Image
            width={1682}
            height={445}
            src="/assets/media/others/line-4.png"
            alt="Line"
          />
        </li>
      </ul>
    </div>
  );
};
