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
                <span className="subtitle">About Us</span>
                <h2 className="title mb--40">
                  We do design, code &amp; develop.
                </h2>
                <p>
                  Nulla et velit gravida, facilisis quam a, molestie ante.
                  Mauris placerat suscipit dui, eget maximus tellus blandit a.
                  Praesent non tellus sed ligula commodo blandit in et mauris.
                  Quisque efficitur ipsum ut dolor molestie pellentesque.{" "}
                </p>
                <p>
                  Nulla pharetra hendrerit mi quis dapibus. Quisque luctus,
                  tortor a venenatis fermentum, est lacus feugiat nisl, id
                  pharetra odio enim eget libero.{" "}
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
              <h3 className="title">Get a free Keystroke quote now</h3>
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
                    placeholder="John Smith"
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
                    placeholder={+123456789}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="axil-btn btn-fill-primary btn-fluid btn-primary"
                    name="submit-btn"
                  >
                    Get Free Quote
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
