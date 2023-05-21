import React from "react";
import Image from "next/image";
export const ContactArea = () => {
  return (
    <section className="section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="contact-form-box shadow-box mb--30">
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
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="contact-email"
                  />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    className="form-control"
                    name="contact-company"
                  />
                </div>
                <div className="form-group mb--40">
                  <label>How can we help you?</label>
                  <textarea
                    name="contact-message"
                    id="contact-message"
                    className="form-control textarea"
                    cols="30"
                    rows="4"
                  ></textarea>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="axil-btn btn-fill-primary btn-fluid btn-primary"
                    name="submit-btn"
                  >
                    Get Pricing Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
              <h4 className="title">Phone</h4>
              <p>Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm</p>
              <h4 className="phone-number">
                <a href="tel:1234567890">(123) 456 7890</a>
              </h4>
            </div>
            <div className="contact-info mb--30">
              <h4 className="title">Email</h4>
              <p>
                Our support team will get back to in 48-h during standard
                business hours.
              </p>
              <h4 className="phone-number">
                <a href="mailto:info@example.com">info@example.com</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-12">
        <li className="shape shape-1">
          <Image
            src="/assets/media/others/bubble-2.png"
            width={150}
            height={150}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <Image
            src="/assets/media/others/bubble-1.png"
            alt="Bubble"
            width={88}
            height={88}
          />
        </li>
        <li className="shape shape-3">
          <Image
            src="/assets/media/others/circle-3.png"
            height={811}
            width={824}
            alt="Circle"
          />
        </li>
      </ul>
    </section>
  );
};
