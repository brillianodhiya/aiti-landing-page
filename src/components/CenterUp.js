import Image from "next/image";
import React from "react";

const CenterUp = () => {
  return (
    <section className="section section-padding bg-color-dark">
      <div className="container">
        <div className="section-heading heading-light">
          <span className="subtitle">Tentang kami</span>
          <h2 className="title">Perjalanan startup kami.</h2>
          <p>
            Kami bersama dengan klien kami telah menciptakan beberapa solusi
            digital yang luar biasa untuk bisnis mereka.
          </p>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={100}
          >
            <div className="counterup-progress active">
              <div className="icon">
                <Image
                  width={32}
                  height={32}
                  src="/assets/media/icon/icon-7.png"
                  alt="Apple"
                />
              </div>
              <div className="count-number h2">
                <span className="number count">3</span>
                <span className="symbol">+</span>
              </div>
              <h6 className="title">Tahun Berjalan</h6>
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={200}
          >
            <div className="counterup-progress">
              <div className="icon">
                <Image
                  width={32}
                  height={32}
                  src="/assets/media/icon/icon-8.png"
                  alt="Apple"
                />
              </div>
              <div className="count-number h2">
                <span className="number count">15</span>
                <span className="symbol">+</span>
              </div>
              <h6 className="title">Project Diterima</h6>
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={300}
          >
            <div className="counterup-progress">
              <div className="icon">
                <Image
                  width={32}
                  height={32}
                  src="/assets/media/icon/icon-9.png"
                  alt="Apple"
                />
              </div>
              <div className="count-number h2">
                <span className="number count">11</span>
                <span className="symbol">+</span>
              </div>
              <h6 className="title">Spesialis</h6>
            </div>
          </div>
          <div
            className="col-lg-3 col-6"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={400}
          >
            <div className="counterup-progress">
              <div className="icon">
                <Image
                  width={32}
                  height={32}
                  src="/assets/media/icon/apple.png"
                  alt="Apple"
                />
              </div>
              <div className="count-number h2">
                <span className="number count">24</span>
                <span className="symbol">h</span>
              </div>
              <h6 className="title">Servis 24 jam</h6>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-5 list-unstyled">
        <li className="shape shape-1">
          <Image
            width={663}
            height={663}
            src="/assets/media/others/circle-1.png"
            alt="line"
          />
        </li>
        <li className="shape shape-2">
          <Image
            width={550}
            height={550}
            src="/assets/media/others/line-3.png"
            alt="line"
          />
        </li>
        <li className="shape shape-3">
          <Image
            width={105}
            height={106}
            src="/assets/media/others/bubble-5.png"
            alt="line"
          />
        </li>
        <li className="shape shape-4">
          <Image
            width={46}
            height={46}
            src="/assets/media/others/bubble-6.png"
            alt="line"
          />
        </li>
      </ul>
    </section>
  );
};

export default CenterUp;
