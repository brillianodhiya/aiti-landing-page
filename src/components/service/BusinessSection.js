import React from "react";
import Image from "next/image";
export const BusinessSection = () => {
  return (
    <div class="section section-padding bg-color-light" id="section4">
      <div class="container">
        <div class="section-heading heading-left">
          <span class="subtitle">Service</span>
          <h2 class="title">Business</h2>
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
                  height={90}
                  width={90}
                  src="/assets/media/icon/icon-39.png"
                  alt="icon"
                />
              </div>
              <div class="content">
                <h5 class="title">
                  <a href="service-business.html">Digital strategy</a>
                </h5>
                <p>
                  We design professional looking yet simple Logo. Our designs
                  are search engine and user friendly.
                </p>
                <a href="service-business.html" class="more-btn">
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
                  height={90}
                  width={90}
                  src="/assets/media/icon/icon-40.png"
                  alt="icon"
                />
              </div>
              <div class="content">
                <h5 class="title">
                  <a href="service-business.html">Business consulting</a>
                </h5>
                <p>
                  We design professional looking yet simple websites. Our
                  designs are search engine and user friendly.
                </p>
                <a href="service-business.html" class="more-btn">
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
                  height={90}
                  width={90}
                  src="/assets/media/icon/icon-41.png"
                  alt="icon"
                />
              </div>
              <div class="content">
                <h5 class="title">
                  <a href="service-business.html">Content writing</a>
                </h5>
                <p>
                  We design professional looking yet Mobile Apps. Our designs
                  are search engine and user friendly.
                </p>
                <a href="service-business.html" class="more-btn">
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
                  height={90}
                  width={90}
                  src="/assets/media/icon/icon-42.png"
                  alt="icon"
                />
              </div>
              <div class="content">
                <h5 class="title">
                  <a href="service-business.html">Reporting</a>
                </h5>
                <p>
                  We design professional looking yet Mobile Apps. Our designs
                  are search engine and user friendly.
                </p>
                <a href="service-business.html" class="more-btn">
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
