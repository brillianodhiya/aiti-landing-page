import React from "react";
import Image from "next/image";

export const Banner = () => {
  return (
    <div class="breadcrum-area">
      <div class="container">
        <div class="breadcrumb">
          <ul class="list-unstyled">
            <li>
              <a href="index-1.html">Home</a>
            </li>
            <li class="active">Blog</li>
          </ul>
          <h1 class="title h2">Blog</h1>
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
            src="/assets/media/others/bubble-10.png"
            alt="Bubble"
            width={475}
            height={565}
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