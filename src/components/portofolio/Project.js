import React from "react";
import Image from "next/image";
export const Project = () => {
  return (
    <section class="section section-padding-equal pt--200 pt_md--80 pt_sm--60">
      <div class="container">
        <div class="section-heading heading-left">
          <span class="subtitle">Our Project</span>
          <h2 class="title">
            Some of our finest <br /> work.
          </h2>
        </div>
        <div class="axil-isotope-wrapper">
          <div class="isotope-button isotope-project-btn">
            <button data-filter="*" class="is-checked">
              <span class="filter-text">All Works</span>
            </button>
            <button data-filter=".branding">
              <span class="filter-text">Branding</span>
            </button>
            <button data-filter=".mobile">
              <span class="filter-text">Mobile</span>
            </button>
          </div>
          <div class="row isotope-list">
            <div class="col-xl-4 col-md-6 project branding">
              <div class="project-grid">
                <div class="thumbnail">
                  <a href="single-portfolio.html">
                    <Image
                      src="/assets/media/project/project-1.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="single-portfolio.html">Creative Agency</a>
                  </h4>
                  <span class="subtitle">Full Branding, Website, App</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 project mobile">
              <div class="project-grid">
                <div class="thumbnail">
                  <a href="single-portfolio.html">
                    <Image
                      src="/assets/media/project/project-2.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="single-portfolio.html">Digital Marketing</a>
                  </h4>
                  <span class="subtitle">Logo, Website & Mobile App</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 project branding">
              <div class="project-grid">
                <div class="thumbnail">
                  <a href="single-portfolio.html">
                    <Image
                      src="/assets/media/project/project-3.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="single-portfolio.html">Digital Agency</a>
                  </h4>
                  <span class="subtitle">Website, UI/UX</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 project mobile">
              <div class="project-grid">
                <div class="thumbnail">
                  <a href="single-portfolio.html">
                    <Image
                      src="/assets/media/project/project-4.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="single-portfolio.html">Plan Management</a>
                  </h4>
                  <span class="subtitle">Branding, Website, IOS App</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 project branding">
              <div class="project-grid">
                <div class="thumbnail">
                  <a href="single-portfolio.html">
                    <Image
                      src="/assets/media/project/project-5.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="single-portfolio.html">Social Engagement</a>
                  </h4>
                  <span class="subtitle">Design, Development</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 project branding">
              <div class="project-grid">
                <div class="thumbnail">
                  <a href="single-portfolio.html">
                    <Image
                      src="/assets/media/project/project-6.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="single-portfolio.html">Technical SEO</a>
                  </h4>
                  <span class="subtitle">Logo, Webapp, App</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 project mobile">
              <div class="project-grid">
                <div class="thumbnail">
                  <a href="single-portfolio.html">
                    <Image
                      src="/assets/media/project/project-1.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="single-portfolio.html">Creative Agency</a>
                  </h4>
                  <span class="subtitle">Full Branding, Website, App</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 project branding">
              <div class="project-grid">
                <div class="thumbnail">
                  <a href="single-portfolio.html">
                    <Image
                      src="/assets/media/project/project-2.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="single-portfolio.html">Digital Marketing</a>
                  </h4>
                  <span class="subtitle">Logo, Website & Mobile App</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 project mobile">
              <div class="project-grid">
                <div class="thumbnail">
                  <a href="single-portfolio.html">
                    <Image
                      src="/assets/media/project/project-3.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="single-portfolio.html">Digital Agency</a>
                  </h4>
                  <span class="subtitle">Website, UI/UX</span>
                </div>
              </div>
            </div>
          </div>
          <div class="more-project-btn">
            <a href="#" class="axil-btn btn-fill-primary">
              Discover More Projects
            </a>
          </div>
        </div>
      </div>
      <ul class="shape-group-7 list-unstyled">
        <li class="shape shape-1">
          <Image
            src="/assets/media/others/circle-2.png"
            alt="circle"
            width={886}
            height={888}
          />
        </li>
        <li class="shape shape-2">
          <Image
            src="/assets/media/others/bubble-2.png"
            alt="Line"
            width={150}
            height={150}
          />
        </li>
        <li class="shape shape-3">
          <Image
            src="/assets/media/others/bubble-1.png"
            alt="Line"
            width={88}
            height={88}
          />
        </li>
      </ul>
    </section>
  );
};
