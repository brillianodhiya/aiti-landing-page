import React from "react";
import Image from "next/image";

export const DesignSection = () => {
  return (
    <>
      <div class="section section-padding" id="section1">
        <div class="container">
          <div class="section-heading heading-left">
            <span class="subtitle">Service</span>
            <h2 class="title">Design</h2>
          </div>
          <div class="row">
            <div
              class="col-lg-4 col-md-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div class="services-grid service-style-2">
                <div class="thumbnail">
                  <Image
                    src="/assets/media/icon/icon-29.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div class="content">
                  <h5 class="title">
                    <a href="service-design.html">Logo &amp; Branding</a>
                  </h5>
                  <p>
                    We design professional looking yet simple Logo. Our designs
                    are search engine and user friendly.
                  </p>
                  <a href="service-design.html" class="more-btn">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <div class="services-grid service-style-2">
                <div class="thumbnail">
                  <Image
                    src="/assets/media/icon/icon-27.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div class="content">
                  <h5 class="title">
                    <a href="service-design.html">Website Design</a>
                  </h5>
                  <p>
                    We design professional looking yet simple websites. Our
                    designs are search engine and user friendly.
                  </p>
                  <a href="service-design.html" class="more-btn">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="300"
            >
              <div class="services-grid service-style-2">
                <div class="thumbnail">
                  <Image
                    src="/assets/media/icon/icon-28.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div class="content">
                  <h5 class="title">
                    <a href="service-design.html">Mobile app design</a>
                  </h5>
                  <p>
                    We design professional looking yet Mobile Apps. Our designs
                    are search engine and user friendly.
                  </p>
                  <a href="service-design.html" class="more-btn">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div class="services-grid service-style-2">
                <div class="thumbnail">
                  <Image
                    src="/assets/media/icon/icon-4.png"
                    alt="icon"
                    width={102}
                    height={90}
                  />
                </div>
                <div class="content">
                  <h5 class="title">
                    <a href="service-design.html">Graphic/print design</a>
                  </h5>
                  <p>
                    From simple Content Management System to complex eCommerce
                    developer, we cover it all.
                  </p>
                  <a href="service-design.html" class="more-btn">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <div class="services-grid service-style-2">
                <div class="thumbnail">
                  <Image
                    src="/assets/media/icon/icon-30.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div class="content">
                  <h5 class="title">
                    <a href="service-design.html">Video production</a>
                  </h5>
                  <p>
                    From simple Content Management System to complex eCommerce
                    developer, we cover it all.
                  </p>
                  <a href="service-design.html" class="more-btn">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
