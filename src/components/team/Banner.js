import Image from "next/image";
import React from "react";

export const Banner = () => {
  return (
    <div class="breadcrum-area breadcrumb-banner">
      <div class="container">
        <div
          class="section-heading heading-left"
          data-sal="slide-right"
          data-sal-duration="1000"
          data-sal-delay="300"
        >
          <h1 class="title h2">Meet talent &amp; experience</h1>
          <p>
            Grow your business online by awesomely designed mobile apps that
            fits all types.
          </p>
        </div>
        <div
          class="banner-thumbnail thumbnail-2"
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="400"
        >
          <Image
            class="paralax-image"
            src="/assets/media/banner/banner-thumb-2.png"
            alt="Illustration"
            width={1006}
            height={440}
          />
        </div>
      </div>
      <ul class="shape-group-8 list-unstyled">
        <li
          class="shape shape-1"
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
          class="shape shape-2"
          data-sal="slide-left"
          data-sal-duration="500"
          data-sal-delay="200"
        >
          <Image
            src="/assets/media/others/bubble-21.png"
            alt="Bubble"
            width={565}
            height={862}
          />
        </li>
        <li
          class="shape shape-3"
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
