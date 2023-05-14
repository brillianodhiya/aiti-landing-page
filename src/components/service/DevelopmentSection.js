import React from "react";
import Image from "next/image";

export const DevelopmentSection = () => {
  return (
    <div class="section section-padding bg-color-light" id="section2">
      <div class="container">
        <div class="section-heading heading-left">
          <span class="subtitle">Service</span>
          <h2 class="title">Development</h2>
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
                  src="/assets/media/icon/icon-31.png"
                  width={90}
                  height={90}
                  alt="icon"
                />
              </div>
              <div class="content">
                <h5 class="title">
                  <a href="service-development.html">Content Managment</a>
                </h5>
                <p>
                  We design professional looking yet simple Logo. Our designs
                  are search engine and user friendly.
                </p>
                <a href="service-development.html" class="more-btn">
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
                  src="/assets/media/icon/icon-32.png"
                  width={90}
                  height={90}
                  alt="icon"
                />
              </div>
              <div class="content">
                <h5 class="title">
                  <a href="service-development.html">Mobile app development</a>
                </h5>
                <p>
                  We design professional looking yet simple websites. Our
                  designs are search engine and user friendly.
                </p>
                <a href="service-development.html" class="more-btn">
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
                  src="/assets/media/icon/icon-33.png"
                  width={90}
                  height={90}
                  alt="icon"
                />
              </div>
              <div class="content">
                <h5 class="title">
                  <a href="service-development.html">eCommerce</a>
                </h5>
                <p>
                  We design professional looking yet Mobile Apps. Our designs
                  are search engine and user friendly.
                </p>
                <a href="service-development.html" class="more-btn">
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
