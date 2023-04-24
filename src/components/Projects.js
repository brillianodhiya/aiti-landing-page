import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="section section-padding-2">
      <div className="container">
        <div className="section-heading heading-left mb--40">
          <span className="subtitle">Our Project</span>
          <h2 className="title">
            Some of our <br /> finest work.
          </h2>
        </div>
        <div className="axil-isotope-wrapper">
          <div className="isotope-button isotope-project-btn">
            <button data-filter="*" className="is-checked">
              <span className="filter-text">All Works</span>
            </button>
            <button data-filter=".branding">
              <span className="filter-text">Branding</span>
            </button>
            <button data-filter=".mobile">
              <span className="filter-text">Mobile</span>
            </button>
          </div>
          <div className="row row-35 isotope-list">
            <div className="col-md-6 project branding">
              <div className="project-grid">
                <div className="thumbnail" style={{ minHeight: "460px" }}>
                  <Link href="/single-portfolio">
                    <Image
                      width={610}
                      height={460}
                      src="/assets/media/project/project-1.png"
                      alt="project"
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/single-portfolio">Creative Agency</Link>
                  </h4>
                  <span className="subtitle">Full Branding, Website, App</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 project mobile">
              <div className="project-grid">
                <div className="thumbnail" style={{ minHeight: "460px" }}>
                  <Link href="/single-portfolio">
                    <Image
                      width={610}
                      height={460}
                      src="/assets/media/project/project-2.png"
                      alt="project"
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/single-portfolio">Digital Marketing</Link>
                  </h4>
                  <span className="subtitle">
                    Logo, Website &amp; Mobile App
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 project branding">
              <div className="project-grid">
                <div className="thumbnail" style={{ minHeight: "460px" }}>
                  <Link href="/single-portfolio">
                    <Image
                      width={610}
                      height={460}
                      src="/assets/media/project/project-3.png"
                      alt="project"
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/single-portfolio">Digital Agency</Link>
                  </h4>
                  <span className="subtitle">Website, UI/UX</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 project mobile">
              <div className="project-grid">
                <div className="thumbnail" style={{ minHeight: "460px" }}>
                  <Link href="/single-portfolio">
                    <Image
                      width={610}
                      height={460}
                      src="/assets/media/project/project-4.png"
                      alt="project"
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/single-portfolio">Plan Management</Link>
                  </h4>
                  <span className="subtitle">Branding, Website, IOS App</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 project branding">
              <div className="project-grid">
                <div className="thumbnail" style={{ minHeight: "460px" }}>
                  <Link href="single-portfolio">
                    <Image
                      width={610}
                      height={460}
                      src="/assets/media/project/project-5.png"
                      alt="project"
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="single-portfolio">Social Engagement</Link>
                  </h4>
                  <span className="subtitle">Design, Development</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 project mobile">
              <div className="project-grid">
                <div className="thumbnail" style={{ minHeight: "460px" }}>
                  <Link href="/single-portfolio">
                    <Image
                      width={610}
                      height={460}
                      src="/assets/media/project/project-6.png"
                      alt="project"
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="single-portfolio">Web Application</Link>
                  </h4>
                  <span className="subtitle">Logo, Webapp, App</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-7 list-unstyled">
        <li className="shape shape-1">
          <Image
            width={886}
            height={888}
            src="/assets/media/others/circle-2.png"
            alt="circle"
          />
        </li>
        <li className="shape shape-2">
          <Image
            width={150}
            height={150}
            src="/assets/media/others/bubble-2.png"
            alt="Line"
          />
        </li>
        <li className="shape shape-3">
          <Image
            width={88}
            height={88}
            src="/assets/media/others/bubble-1.png"
            alt="Line"
          />
        </li>
      </ul>
    </section>
  );
};

export default Projects;
