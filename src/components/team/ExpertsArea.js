import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ExpertsArea = () => {
  return (
    <section className="section section-padding expert-counterup-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="section-heading heading-left">
              <span className="subtitle">Berpengalaman sesuai bidang</span>
              <h2>Apa yang membuat kami spesial?</h2>
              <p className="mb--50">
                Kami adalah tim yang berpengalaman dalam bidang desain dan
                pengembangan aplikasi. Kami berkomitmen untuk memberikan solusi
                digital kreatif untuk bisnis Anda.
              </p>
              {/* <Link
                href="/contact"
                className="axil-btn btn-large btn-fill-primary"
              >
                Careers
              </Link> */}
            </div>
          </div>
          <div className="col-lg-6 offset-xl-1">
            <div className="row" id="no-equal-gallery">
              <div
                className="col-sm-6 no-equal-item"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="100"
              >
                <div className="counterup-progress counterup-style-2 active">
                  <div className="icon">
                    <Image
                      className="dark-icon"
                      src="/assets/media/icon/icon-10.png"
                      alt="Icon"
                      width={32}
                      height={32}
                    />
                    <Image
                      className="light-icon"
                      src="/assets/media/icon/icon-7.png"
                      alt="Icon"
                      width={32}
                      height={32}
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
                className="col-sm-6 mt--90 mt_md--0 no-equal-item"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <div className="counterup-progress counterup-style-2">
                  <div className="icon">
                    <Image
                      className="dark-icon"
                      src="/assets/media/icon/icon-11.png"
                      alt="Icon"
                      width={32}
                      height={32}
                    />
                    <Image
                      className="light-icon"
                      src="/assets/media/icon/icon-8.png"
                      alt="Icon"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="count-number h2">
                    <span className="number count">15</span>
                    <span className="symbol">+</span>
                  </div>
                  <h6 className="title">Projects Diterima</h6>
                </div>
              </div>
              <div
                className="col-sm-6 no-equal-item"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="300"
              >
                <div className="counterup-progress counterup-style-2">
                  <div className="icon">
                    <Image
                      className="dark-icon"
                      src="/assets/media/icon/icon-12.png"
                      alt="Icon"
                      width={32}
                      height={32}
                    />
                    <Image
                      className="light-icon"
                      src="/assets/media/icon/icon-9.png"
                      alt="Icon"
                      width={32}
                      height={32}
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
                className="col-sm-6 no-equal-item"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="400"
              >
                <div className="counterup-progress counterup-style-2">
                  <div className="icon">
                    <Image
                      className="dark-icon"
                      src="/assets/media/icon/apple-black.png"
                      alt="Icon"
                      width={32}
                      height={32}
                    />
                    <Image
                      className="light-icon"
                      src="/assets/media/icon/apple.png"
                      alt="Icon"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="count-number h2">
                    <span className="number count">24</span>
                    <span className="symbol">h</span>
                  </div>
                  <h6 className="title">Servus 24 Jam</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
