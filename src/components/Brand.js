import Image from "next/image";
import React from "react";

const Brand = () => {
  return (
    <section className="section section-padding bg-color-dark">
      <div className="container">
        <div className="section-heading heading-light-left">
          <span className="subtitle">Top Clients</span>
          <h2 className="title">We’ve built solutions for...</h2>
          <p>
            Design anything from simple icons to fully featured websites and
            applications.
          </p>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
          >
            <div className="brand-grid active">
              <Image
                width={230}
                height={133}
                src="/assets/media/brand/brand-1.png"
                alt="Brand"
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={100}
          >
            <div className="brand-grid">
              <Image
                width={230}
                height={133}
                src="/assets/media/brand/brand-2.png"
                alt="Brand"
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={200}
          >
            <div className="brand-grid">
              <Image
                width={230}
                height={133}
                src="/assets/media/brand/brand-3.png"
                alt="Brand"
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={300}
          >
            <div className="brand-grid">
              <Image
                width={230}
                height={133}
                src="/assets/media/brand/brand-4.png"
                alt="Brand"
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={400}
          >
            <div className="brand-grid">
              <Image
                width={230}
                height={133}
                src="/assets/media/brand/brand-5.png"
                alt="Brand"
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={500}
          >
            <div className="brand-grid">
              <Image
                width={230}
                height={133}
                src="/assets/media/brand/brand-6.png"
                alt="Brand"
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={600}
          >
            <div className="brand-grid">
              <Image
                width={230}
                height={133}
                src="/assets/media/brand/brand-7.png"
                alt="Brand"
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={500}
            data-sal-delay={700}
          >
            <div className="brand-grid">
              <Image
                width={230}
                height={133}
                src="/assets/media/brand/brand-8.png"
                alt="Brand"
              />
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-2 list-unstyled">
        <li className="shape shape-1">
          <Image
            width={663}
            height={663}
            src="/assets/media/others/circle-1.png"
            alt="circle"
          />
        </li>
        <li className="shape shape-2">
          <Image
            width={550}
            height={550}
            src="/assets/media/others/line-3.png"
            alt="circle"
          />
        </li>
        <li className="shape shape-3">
          <Image
            width={114}
            height={114}
            src="/assets/media/others/bubble-3.png"
            alt="circle"
          />
        </li>
      </ul>
    </section>
  );
};

export default Brand;
