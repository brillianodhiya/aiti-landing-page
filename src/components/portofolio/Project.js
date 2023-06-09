import React from "react";
import Image from "next/image";
import Link from "next/link";
export const Project = () => {
  return (
    <section className="section section-padding-equal pt--200 pt_md--80 pt_sm--60">
      <div className="container">
        <div className="section-heading heading-left">
          <span className="subtitle">Our Project</span>
          <h2 className="title">
            Some of our finest <br /> work.
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
          <div className="row isotope-list">
            <div className="col-xl-4 col-md-6 project branding">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="/portofolio/single-portfolio">
                    <Image
                      src="/assets/media/project/project-1.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/portofolio/single-portfolio">
                      Creative Agency
                    </Link>
                  </h4>
                  <span className="subtitle">Full Branding, Website, App</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 project mobile">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="/portofolio/single-portfolio">
                    <Image
                      src="/assets/media/project/project-2.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/portofolio/single-portfolio">
                      Digital Marketing
                    </Link>
                  </h4>
                  <span className="subtitle">Logo, Website & Mobile App</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 project branding">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="/portofolio/single-portfolio">
                    <Image
                      src="/assets/media/project/project-3.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/portofolio/single-portfolio">
                      Digital Agency
                    </Link>
                  </h4>
                  <span className="subtitle">Website, UI/UX</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 project mobile">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="/portofolio/single-portfolio">
                    <Image
                      src="/assets/media/project/project-4.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/portofolio/single-portfolio">
                      Plan Management
                    </Link>
                  </h4>
                  <span className="subtitle">Branding, Website, IOS App</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 project branding">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="/portofolio/single-portfolio">
                    <Image
                      src="/assets/media/project/project-5.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/portofolio/single-portfolio">
                      Social Engagement
                    </Link>
                  </h4>
                  <span className="subtitle">Design, Development</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 project branding">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="/portofolio/single-portfolio">
                    <Image
                      src="/assets/media/project/project-6.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/portofolio/single-portfolio">
                      Technical SEO
                    </Link>
                  </h4>
                  <span className="subtitle">Logo, Webapp, App</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 project mobile">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="/portofolio/single-portfolio">
                    <Image
                      src="/assets/media/project/project-1.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/portofolio/single-portfolio">
                      Creative Agency
                    </Link>
                  </h4>
                  <span className="subtitle">Full Branding, Website, App</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 project branding">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="/portofolio/single-portfolio">
                    <Image
                      src="/assets/media/project/project-2.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/portofolio/single-portfolio">
                      Digital Marketing
                    </Link>
                  </h4>
                  <span className="subtitle">Logo, Website & Mobile App</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 project mobile">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="/portofolio/single-portfolio">
                    <Image
                      src="/assets/media/project/project-3.png"
                      alt="project"
                      height={460}
                      width={610}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/portofolio/single-portfolio">
                      Digital Agency
                    </Link>
                  </h4>
                  <span className="subtitle">Website, UI/UX</span>
                </div>
              </div>
            </div>
          </div>
          <div className="more-project-btn">
            <Link href="#" className="axil-btn btn-fill-primary">
              Discover More Projects
            </Link>
          </div>
        </div>
      </div>
      <ul className="shape-group-7 list-unstyled">
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
    </section>
  );
};
