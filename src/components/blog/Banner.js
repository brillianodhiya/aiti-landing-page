import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Banner = ({ title = "Blog" }) => {
  return (
    <div className="breadcrum-area">
      <div className="container">
        <div className="breadcrumb">
          <ul className="list-unstyled">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="active">Blog</li>
          </ul>
          <h1 className="title h2">{title}</h1>
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
            src="/assets/media/others/bubble-10.png"
            alt="Bubble"
            width={475}
            height={565}
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
