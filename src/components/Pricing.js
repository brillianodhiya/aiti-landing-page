import Image from "next/image";
import Link from "next/link";
import React from "react";

const Pricing = () => {
  const [isYearly, handlePlanSelect] = React.useState(false);

  return (
    <section className="section bg-color-light section-padding">
      <div className="container">
        <div className="section-heading mb-0">
          <span className="subtitle">Perkiraan Biaya.</span>
          <h2 className="title">Harga yang terjangkau.</h2>
          <p>
            Kami menawarkan harga yang terjangkau untuk semua kalangan. Dengan
            harga yang terjangkau, Anda dapat memiliki website yang menarik dan
            fungsional.
          </p>
        </div>
        <div className="row">
          <div
            className="col-lg-4"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={100}
          >
            <div className={`pricing-table active`}>
              {/* <div className="star-icon">
                <i className="fas fa-star" />
              </div> */}
              <div className="pricing-header">
                <h3 className="title">Paket Website</h3>
                <span className="subtitle">
                  Paket Website untuk Bisnis maupun perorangan
                </span>
                <div className="price-wrap">
                  <div className="yearly-pricing">
                    <span className="subtitle">mulai dari</span>
                    <br />
                    <span className="amount">Rp490K,-</span>
                  </div>
                </div>
                <div className="pricing-btn">
                  <Link
                    href={"/"}
                    className="axil-btn btn-large-fluid btn-borderd"
                  >
                    Hubungi kami untuk penawaran
                  </Link>
                </div>
              </div>
              {/* <div className="pricing-body">
                <ul className="list-unstyled">
                  <li>10 Pages Responsive Website</li>
                  <li>5 PPC Campaigns</li>
                  <li>10 SEO Keywords</li>
                  <li>5 Facebook Camplaigns</li>
                  <li>2 Video Camplaigns</li>
                </ul>
              </div> */}
            </div>
          </div>
          <div
            className="col-lg-4"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={200}
          >
            <div className={`pricing-table`}>
              <div className="pricing-header">
                <h3 className="title">Paket Design</h3>
                <span className="subtitle">
                  Paket Design untuk Bisnis maupun perorangan
                </span>
                <div className="price-wrap">
                  <div className="yearly-pricing">
                    <span className="subtitle">mulai dari</span>
                    <br />
                    <span className="amount">Rp50K,-</span>
                  </div>
                </div>
                <div className="pricing-btn">
                  <Link
                    href="/"
                    className="axil-btn btn-large-fluid btn-borderd"
                  >
                    Hubungi kami untuk penawaran
                  </Link>
                </div>
              </div>
              {/* <div className="pricing-body">
                <ul className="list-unstyled">
                  <li>50 Pages Responsive Website</li>
                  <li>Unlimited PPC Campaigns</li>
                  <li>Unlimited SEO Keywords</li>
                  <li>Unlimited Facebook Camplaigns</li>
                  <li>Unlimited Video Camplaigns</li>
                </ul>
              </div> */}
            </div>
          </div>
          <div
            className="col-lg-4"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={300}
          >
            <div className="pricing-table">
              <div className="pricing-header">
                <h3 className="title">Paket Illustrasi</h3>
                <span className="subtitle">
                  Paket Illustrasi termasuk Live2D
                </span>
                <div className="price-wrap">
                  <div className="yearly-pricing">
                    <span className="subtitle">mulai dari</span>
                    <br />
                    <span className="amount">Rp150K,-</span>
                  </div>
                </div>
                <div className="pricing-btn">
                  <Link
                    href="/"
                    className="axil-btn btn-large-fluid btn-borderd"
                  >
                    Hubungi kami untuk penawaran
                  </Link>
                </div>
              </div>
              {/* <div className="pricing-body">
                <ul className="list-unstyled">
                  <li>10 Pages Responsive Website</li>
                  <li>5 PPC Campaigns</li>
                  <li>10 SEO Keywords</li>
                  <li>5 Facebook Camplaigns</li>
                  <li>2 Video Camplaigns</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="pricing-billing-duration">
          <div
            className="row"
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div>
              <h3 className="title">Paket Website</h3>
              <p className="subtitle">
                Kami menawarkan paket website yang terjangkau untuk Anda.
              </p>
            </div>
          </div>
        </div> */}
        {/* <div className="pricing-billing-duration">
          <ul>
            <li className="nav-item">
              <button
                className={`nav-link ${isYearly ? "" : "active"}`}
                id="yearly-plan-btn"
                type="button"
                onClick={() => handlePlanSelect(false)}
              >
                Billed yearly
              </button>
            </li>
            <li className="nav-item billed-check-box">
              <input
                type="checkbox"
                id="pricing-checkbox"
                defaultChecked={false}
                onChange={(e) => handlePlanSelect(e.target.checked)}
              />
              <label htmlFor="pricing-checkbox" />
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${isYearly ? "active" : ""}`}
                id="monthly-plan-btn"
                type="button"
                onClick={() => handlePlanSelect(true)}
              >
                Billed monthly
              </button>
            </li>
          </ul>
        </div>
        <div className="row">
          <div
            className="col-lg-4"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={100}
          >
            <div className={`pricing-table active`}>
              <div className="star-icon">
                <i className="fas fa-star" />
              </div>
              <div className="pricing-header">
                <h3 className="title">Professional</h3>
                <span className="subtitle">A beautiful, simple website</span>
                <div className="price-wrap">
                  <div
                    className="yearly-pricing"
                    style={{ display: !isYearly ? "block" : "none" }}
                  >
                    <span className="amount">$119.99</span>
                    <span className="duration">/yearly</span>
                  </div>
                  <div
                    className="monthly-pricing"
                    style={{ display: isYearly ? "block" : "none" }}
                  >
                    <span className="amount">$19.00</span>
                    <span className="duration">/monthly</span>
                  </div>
                </div>
                <div className="pricing-btn">
                  <Link
                    href={"/"}
                    className="axil-btn btn-large-fluid btn-borderd"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
              <div className="pricing-body">
                <ul className="list-unstyled">
                  <li>10 Pages Responsive Website</li>
                  <li>5 PPC Campaigns</li>
                  <li>10 SEO Keywords</li>
                  <li>5 Facebook Camplaigns</li>
                  <li>2 Video Camplaigns</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={200}
          >
            <div className={`pricing-table`}>
              <div className="pricing-header">
                <h3 className="title">Standard</h3>
                <span className="subtitle">Small Team</span>
                <div className="price-wrap">
                  <div
                    className="yearly-pricing"
                    style={{ display: !isYearly ? "block" : "none" }}
                  >
                    <span className="amount">$219.99</span>
                    <span className="duration">/yearly</span>
                  </div>
                  <div
                    className="monthly-pricing"
                    style={{ display: isYearly ? "block" : "none" }}
                  >
                    <span className="amount">$29.00</span>
                    <span className="duration">/monthly</span>
                  </div>
                </div>
                <div className="pricing-btn">
                  <Link
                    href="/"
                    className="axil-btn btn-large-fluid btn-borderd"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
              <div className="pricing-body">
                <ul className="list-unstyled">
                  <li>50 Pages Responsive Website</li>
                  <li>Unlimited PPC Campaigns</li>
                  <li>Unlimited SEO Keywords</li>
                  <li>Unlimited Facebook Camplaigns</li>
                  <li>Unlimited Video Camplaigns</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={300}
          >
            <div className="pricing-table">
              <div className="pricing-header">
                <h3 className="title">Ultimate</h3>
                <span className="subtitle">Large Team</span>
                <div className="price-wrap">
                  <div
                    className="yearly-pricing"
                    style={{ display: !isYearly ? "block" : "none" }}
                  >
                    <span className="amount">$559.99</span>
                    <span className="duration">/yearly</span>
                  </div>
                  <div
                    className="monthly-pricing"
                    style={{ display: isYearly ? "block" : "none" }}
                  >
                    <span className="amount">$59.00</span>
                    <span className="duration">/monthly</span>
                  </div>
                </div>
                <div className="pricing-btn">
                  <Link
                    href="/"
                    className="axil-btn btn-large-fluid btn-borderd"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
              <div className="pricing-body">
                <ul className="list-unstyled">
                  <li>10 Pages Responsive Website</li>
                  <li>5 PPC Campaigns</li>
                  <li>10 SEO Keywords</li>
                  <li>5 Facebook Camplaigns</li>
                  <li>2 Video Camplaigns</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <ul className="shape-group-3 list-unstyled">
        <li className="shape shape-1">
          <Image
            width={1481}
            height={265}
            src="/assets/media/others/line-1.png"
            alt="shape"
          />
        </li>
        <li className="shape shape-2">
          <Image
            width={49}
            height={49}
            src="/assets/media/others/bubble-4.png"
            alt="shape"
          />
        </li>
        <li className="shape shape-3">
          <Image
            width={535}
            height={604}
            src="/assets/media/others/hand-1.png"
            alt="shape"
          />
        </li>
      </ul>
    </section>
  );
};

export default Pricing;
