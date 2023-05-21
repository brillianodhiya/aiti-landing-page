import Image from "next/image";
import Link from "next/link";
import React from "react";

const CaseStudy = () => {
  return (
    <section className="section section-padding-equal case-study-featured-area">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-5 col-lg-6"
            data-sal="slide-right"
            data-sal-duration={800}
          >
            <div
              className="slick-slider slick-dot-nav featured-content"
              data-slick='{"infinite": true,"arrows": false, "dots": true, "slidesToShow": 1, "asNavFor": ".featured-thumbnail"}'
            >
              <div className="slick-slide">
                <div className="case-study-featured">
                  <div className="section-heading heading-left">
                    <span className="subtitle">Studi Kasus Populer</span>
                    <h2
                      className="title"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Sistem Monitoring IoT Dashboard
                    </h2>
                    <p>
                      Sistem Monitoring ini dapat digunakan untuk memantau
                      kondisi suatu peralatan atau mesin secara real-time.
                    </p>
                    <p>
                      Bahkan dapat digunakan untuk mengoperasikan peralatan atau
                      mesin tersebut secara remote.
                    </p>
                    <Link
                      href="/single-case-study"
                      className="axil-btn btn-fill-primary btn-large"
                    >
                      Baca Lebih Lanjut
                    </Link>
                  </div>
                  <div className="case-study-counterup">
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count">250</span>
                        <span className="symbol">+</span>
                      </h2>
                      <span className="counter-title">Gateway Digunakan</span>
                    </div>
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count">700</span>
                        <span className="symbol">+</span>
                      </h2>
                      <span className="counter-title">Node Digunakan</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slick-slide">
                <div className="case-study-featured">
                  <div className="section-heading heading-left">
                    <span className="subtitle">Studi Kasus Populer</span>
                    <h2
                      className="title"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Live2d VTuber Project - Bellavia
                    </h2>
                    <p>
                      VTuber adalah sebutan untuk Virtual Youtuber, yaitu
                      Youtuber yang menggunakan avatar 2D atau 3D sebagai
                      representasi dirinya.
                    </p>
                    <p>
                      Kami membuat avatar 2D untuk VTuber yang bernama Bellavia.
                    </p>
                    <Link
                      href="/single-case-study"
                      className="axil-btn btn-fill-primary btn-large"
                    >
                      Baca Lebih Lanjut
                    </Link>
                  </div>
                  <div className="case-study-counterup">
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count">1</span>
                        <span className="symbol">x</span>
                      </h2>
                      <span className="counter-title">Revisi</span>
                    </div>
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count">12+</span>
                        <span className="symbol"></span>
                      </h2>
                      <span className="counter-title">Referensi</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slick-slide">
                <div className="case-study-featured">
                  <div className="section-heading heading-left">
                    <span className="subtitle">Studi Kasus Populer</span>
                    <h2
                      className="title"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Aplikasi Absensi Berbasis Web dan Mobile
                    </h2>
                    <p>
                      Aplikasi ini dapat digunakan untuk melakukan absensi
                      karyawan secara online.
                    </p>
                    <p>
                      Aplikasi ini juga dapat digunakan untuk mengelola data
                      karyawan, data absensi, dan data lembur.
                    </p>
                    <Link
                      href="/single-case-study"
                      className="axil-btn btn-fill-primary btn-large"
                    >
                      Baca Lebih Lanjut
                    </Link>
                  </div>
                  <div className="case-study-counterup">
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count">25</span>
                        <span className="symbol">+</span>
                      </h2>
                      <span className="counter-title">Karyawan</span>
                    </div>
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count">1</span>
                        <span className="symbol"></span>
                      </h2>
                      <span className="counter-title">Perusahaan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-7 col-lg-6 d-none d-lg-block"
            data-sal="slide-left"
            data-sal-duration={800}
          >
            <div
              className="slick-slider slick-dot-nav featured-thumbnail"
              data-slick='{"infinite": true,"arrows": false, "dots": false, "fade": true, "slidesToShow": 1, "asNavFor": ".featured-content"}'
            >
              <div className="slick-slide">
                <div className="case-study-featured-thumb">
                  <Image
                    width={740}
                    height={740}
                    src="/assets/media/others/case-study-4.png"
                    alt="travel"
                  />
                </div>
              </div>
              <div className="slick-slide">
                <div className="case-study-featured-thumb">
                  <Image
                    width={740}
                    height={740}
                    src="/assets/media/others/case-study-5.png"
                    alt="travel"
                  />
                </div>
              </div>
              <div className="slick-slide">
                <div className="case-study-featured-thumb">
                  <Image
                    width={740}
                    height={740}
                    src="/assets/media/others/case-study-6.png"
                    alt="travel"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
