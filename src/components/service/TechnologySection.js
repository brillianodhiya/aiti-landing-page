import Image from "next/image";
import React from "react";
Image;
export const TechnologySection = () => {
  return (
    <div class="section section-padding" id="section5">
      <div class="container">
        <div class="section-heading heading-left">
          <span class="subtitle">Service</span>
          <h2 class="title">Technology</h2>
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
                  src="/assets/media/icon/icon-43.png"
                  alt="icon"
                  width={90}
                  height={90}
                />
              </div>
              <div class="content">
                <h5 class="title">
                  <a href="service-technology.html">Hosting</a>
                </h5>
                <p>
                  We design professional looking yet simple Logo. Our designs
                  are search engine and user friendly.
                </p>
                <a href="service-technology.html" class="more-btn">
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
                  src="/assets/media/icon/icon-44.png"
                  alt="icon"
                  width={90}
                  height={90}
                />
              </div>
              <div class="content">
                <h5 class="title">
                  <a href="service-technology.html">Big data analysis</a>
                </h5>
                <p>
                  We design professional looking yet simple websites. Our
                  designs are search engine and user friendly.
                </p>
                <a href="service-technology.html" class="more-btn">
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
