import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProjectDetail = () => {
  return (
    <>
      <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="section-heading heading-left"
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="300"
              >
                <h1 className="title h2">Creative Agency</h1>
                <p>
                  A quick view of industry specific problems solved with design
                  by the awesome team at Keystroke.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="banner-thumbnail"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="400"
              >
                <Image
                  className="paralax-image"
                  src="/assets/media/project/project-2.png"
                  alt="Illustration"
                  width={610}
                  height={460}
                />
              </div>
            </div>
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
      <section className="section-padding single-portfolio-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-heading heading-left mb-0">
                <span className="subtitle">Branding, Creative</span>
                <h3 className="title">Creative agency</h3>
              </div>
              <p>
                From the designers and engineers who are creating the next
                generation of web and mobile experiences, to anyone putting a
                website together for the first time. We provide elegant
                solutions that set new standards for online publishing.
              </p>
              <p>
                Digital technology has made our world more transparent and
                interconnected, posing new challenges and opportunities for
                every business. A holistic, user-centric perspective is what
                truly sets one apart.
              </p>
              <Link href="/contact" className="axil-btn btn-fill-primary">
                Get it Now
              </Link>
            </div>
            <div className="col-lg-6 offset-xl-1">
              <div className="why-choose-us">
                <div className="section-heading heading-left">
                  <h3 className="title">We delivered</h3>
                  <p>
                    Digital technology has made our world more transparent and
                    interconnected, posing new challenges and opportunities for
                    every business.
                  </p>
                </div>
                <div className="accordion" id="choose-accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i className="far fa-compress"></i> Strategy
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#choose-accordion"
                    >
                      <div className="accordion-body">
                        Aenean hendrerit laoreet vehicula. Nullam convallis
                        augue at enim gravida pellentesque.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i className="far fa-code"></i>Design
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#choose-accordion"
                    >
                      <div className="accordion-body">
                        Aenean hendrerit laoreet vehicula. Nullam convallis
                        augue at enim gravida pellentesque.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i className="fal fa-globe"></i>Development
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#choose-accordion"
                    >
                      <div className="accordion-body">
                        Aenean hendrerit laoreet vehicula. Nullam convallis
                        augue at enim gravida pellentesque.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section section-padding-equal bg-color-light">
        <div className="container">
          <div className="about-expert">
            <div className="thumbnail">
              <Image
                src="/assets/media/about/about-1.png"
                alt="Thumbnail"
                width={1070}
                height={710}
              />
              <div className="popup-video">
                <Link
                  href="../../../watch.html?v=1iIZeIy7TqM"
                  className="play-btn popup-youtube"
                >
                  <i className="fas fa-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ul className="shape-group-16 list-unstyled">
          <li className="shape shape-1">
            <Image
              src="/assets/media/others/circle-2.png"
              alt="circle"
              width={886}
              height={888}
            />
          </li>
          <li className="shape shape-2">
            <Image
              src="/assets/media/others/bubble-2.png"
              alt="Line"
              width={150}
              height={150}
            />
          </li>
          <li className="shape shape-3">
            <Image
              src="/assets/media/others/bubble-1.png"
              alt="Line"
              width={88}
              height={88}
            />
          </li>
        </ul>
      </div>
    </>
  );
};
