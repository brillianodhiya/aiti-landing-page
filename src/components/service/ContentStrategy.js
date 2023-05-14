import React from "react";
import Image from "next/image";
export const ContentStrategy = () => {
  return (
    <div class="section section-padding bg-color-light" id="section6">
      <div class="container">
        <div class="section-heading heading-left">
          <span class="subtitle">Service</span>
          <h2 class="title">Content strategy</h2>
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
                  src="/assets/media/icon/icon-45.png"
                  alt="icon"
                  width={90}
                  height={90}
                />
              </div>
              <div class="content">
                <h5 class="title">
                  <a href="service-content-strategy.html">
                    Web Audit Practices
                  </a>
                </h5>
                <p>
                  industry-icon-1 Web Audit Practices A reputable marketing
                  strategy company runs a complete digital,
                </p>
                <a href="service-content-strategy.html" class="more-btn">
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
                  src="/assets/media/icon/icon-46.png"
                  alt="icon"
                  width={90}
                  height={90}
                />
              </div>
              <div class="content">
                <h5 class="title">
                  <a href="service-content-strategy.html">
                    Marketing Flexibility
                  </a>
                </h5>
                <p>
                  Do you cater to other businesses, investors, decision-makers
                  or consumers? A trustworthy digital
                </p>
                <a href="service-content-strategy.html" class="more-btn">
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
                  src="/assets/media/icon/icon-47.png"
                  alt="icon"
                  width={90}
                  height={90}
                />
              </div>
              <div class="content">
                <h5 class="title">
                  <a href="service-content-strategy.html">
                    Advertising Strategy
                  </a>
                </h5>
                <p>
                  Promoting your products and services online requires
                  cutting-edge organic and paid search strategies to rise
                </p>
                <a href="service-content-strategy.html" class="more-btn">
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
