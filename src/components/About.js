import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="section section-padding-equal bg-color-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-sal="slide-up" data-sal-duration={800}>
            <div className="about-us">
              <div className="section-heading heading-left mb-0">
                <span className="subtitle">Tentang Kami</span>
                <h2
                  className="title mb--40"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Kreatifitas dan Inovasi Kami untuk Anda
                </h2>
                <p>
                  AITI Lokal adalah agensi kreatif yang fokus pada desain dan
                  pengembangan aplikasi. Kami berkomitmen untuk memberikan
                  solusi digital kreatif untuk bisnis Anda.
                </p>
                <p>
                  Kami percaya bahwa desain dan pengembangan aplikasi yang baik
                  dapat membantu bisnis Anda berkembang. Kami berusaha untuk
                  memberikan solusi digital kreatif yang dapat membantu bisnis
                  Anda berkembang.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-6 offset-xl-1"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={100}
          >
            <div className="contact-form-box">
              <h3 className="title">
                Ambil langkah pertama untuk proyek digital Anda
              </h3>
              <form
                method="POST"
                action="mail.php"
                className="axil-contact-form"
              >
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="contact-name"
                    placeholder="Fulan"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="contact-email"
                    placeholder="example@mail.com"
                  />
                </div>
                <div className="form-group mb--40">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="contact-company"
                    placeholder={+6288907002408}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="axil-btn btn-fill-primary btn-fluid btn-primary"
                    name="submit-btn"
                  >
                    Ambil langkah pertama
                  </button>
                </div>
                <input
                  type="hidden"
                  className="form-control"
                  name="contact-message"
                  defaultValue="Null"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-6 list-unstyled">
        <li className="shape shape-1">
          <Image
            width={460}
            height={446}
            src="/assets/media/others/bubble-7.png"
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <Image
            width={1481}
            height={392}
            src="/assets/media/others/line-4.png"
            alt="line"
          />
        </li>
        <li className="shape shape-3">
          <Image
            width={1481}
            height={392}
            src="/assets/media/others/line-5.png"
            alt="line"
          />
        </li>
      </ul>
    </section>
  );
};

export default About;
