import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="section section-padding-2">
      <div className="container">
        <div className="section-heading heading-left mb--40">
          <span className="subtitle">Project Kami</span>
          <h2
            className="title"
            style={{
              fontWeight: "bold",
            }}
          >
            Beberapa project <br /> dari tim kami.
          </h2>
        </div>
        <div className="axil-isotope-wrapper">
          <div className="isotope-button isotope-project-btn">
            <button data-filter="*" className="is-checked">
              <span className="filter-text">Semua</span>
            </button>
            <button>
              <span className="filter-text">Development</span>
            </button>
            <button>
              <span className="filter-text">Desain</span>
            </button>
          </div>
          <div className="row row-35 isotope-list">
            <div className="col-md-6 project branding">
              <div className="project-grid">
                <div
                  className="thumbnail"
                  style={{
                    maxHeight: "350px",
                  }}
                >
                  <Link href="/single-portfolio">
                    <Image
                      width={610}
                      height={450}
                      src="/assets/media/project/hoops-1.png"
                      alt="project"
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/single-portfolio">E-Commerce Hoops</Link>
                  </h4>
                  <span className="subtitle">Website, CMS</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 project mobile">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="/single-portfolio">
                    <Image
                      width={610}
                      height={450}
                      src="/assets/media/project/mockup_monitoring air.png"
                      alt="project"
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/single-portfolio">
                      Aplikasi Monitoring IoT
                    </Link>
                  </h4>
                  <span className="subtitle">Website &amp; Mobile App</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 project branding">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="/single-portfolio">
                    <Image
                      width={610}
                      height={460}
                      src="/assets/media/project/mockup_nebula.png"
                      alt="project"
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/single-portfolio">Dashboard Monitoring</Link>
                  </h4>
                  <span className="subtitle">Website</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 project mobile">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="/single-portfolio">
                    <Image
                      width={610}
                      height={460}
                      src="/assets/media/project/mockup_smartmeter.png"
                      alt="project"
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="/single-portfolio">Smartmeter</Link>
                  </h4>
                  <span className="subtitle">Android, Website, CMS</span>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 project branding">
              <div className="project-grid">
                <div
                  className="thumbnail"
                  style={{
                    maxHeight: "350px",
                  }}
                >
                  <Link href="single-portfolio">
                    <Image
                      width={610}
                      height={460}
                      src="/assets/media/project/mockup_profil_IKI.png"
                      alt="project"
                    />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="single-portfolio">Company Profile</Link>
                  </h4>
                  <span className="subtitle">Design, Website</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 project mobile">
              <div className="project-grid">
                <div className="thumbnail">
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
            </div> */}
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
