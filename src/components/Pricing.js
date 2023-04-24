import Image from "next/image";
import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <section className="section bg-color-light section-padding">
      <div className="container">
        <div className="section-heading mb-0">
          <span className="subtitle">Pricing Plan</span>
          <h2 className="title">Find the Right Plan.</h2>
          <p>
            Flexible pricing options for freelancers <br /> and design teams.
          </p>
        </div>
        <div className="pricing-billing-duration">
          <ul>
            <li className="nav-item">
              <button
                className="nav-link active"
                id="yearly-plan-btn"
                type="button"
              >
                Billed yearly
              </button>
            </li>
            <li className="nav-item billed-check-box">
              <input type="checkbox" id="pricing-checkbox" />
              <label htmlFor="pricing-checkbox" />
            </li>
            <li className="nav-item">
              <button className="nav-link" id="monthly-plan-btn" type="button">
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
            <div className="pricing-table active">
              <div className="star-icon">
                <i className="fas fa-star" />
              </div>
              <div className="pricing-header">
                <h3 className="title">Professional</h3>
                <span className="subtitle">A beautiful, simple website</span>
                <div className="price-wrap">
                  <div className="yearly-pricing">
                    <span className="amount">$119.99</span>
                    <span className="duration">/yearly</span>
                  </div>
                  <div className="monthly-pricing">
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
            <div className="pricing-table">
              <div className="pricing-header">
                <h3 className="title">Standard</h3>
                <span className="subtitle">Small Team</span>
                <div className="price-wrap">
                  <div className="yearly-pricing">
                    <span className="amount">$219.99</span>
                    <span className="duration">/yearly</span>
                  </div>
                  <div className="monthly-pricing">
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
                  <div className="yearly-pricing">
                    <span className="amount">$559.99</span>
                    <span className="duration">/yearly</span>
                  </div>
                  <div className="monthly-pricing">
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
        </div>
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
