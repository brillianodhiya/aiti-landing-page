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
                    <span className="subtitle">Proyek Terbaru</span>
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
                    <span className="subtitle">Proyek Terbaru</span>
                    <h2
                      className="title"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Live2d VTuber Project - Marilia Krabbe
                    </h2>
                    <p>
                      VTuber adalah sebutan untuk Virtual Youtuber, yaitu
                      Youtuber yang menggunakan avatar 2D atau 3D sebagai
                      representasi dirinya.
                    </p>
                    <p>
                      Kami membuat avatar 2D untuk VTuber yang bernama Marilia
                      Krabbe.
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
                    <span className="subtitle">Proyek Terbaru</span>
                    <h2
                      className="title"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Aplikasi Penjemputan Zakat
                    </h2>
                    <p>
                      Aplikasi ini dapat digunakan untuk melacak serta melakukan
                      pelaporan penjemputan ziswaf.
                    </p>
                    <p>
                      Aplikasi ini juga dapat digunakan untuk melacak absensi
                      dari petugas beserta lokasi dari setiap titik penjemputan
                      nya.
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
                        <span className="number count">100</span>
                        <span className="symbol">+</span>
                      </h2>
                      <span className="counter-title">Karyawan</span>
                    </div>
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count">500+</span>
                        <span className="symbol"></span>
                      </h2>
                      <span className="counter-title">Kotak Amal</span>
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
                    src="/assets/media/others/15960.jpg"
                    alt="Smartmeter"
                    style={{
                      borderRadius: "36px",
                    }}
                  />
                </div>
              </div>
              <div className="slick-slide">
                <div className="case-study-featured-thumb">
                  <Image
                    width={740}
                    height={740}
                    src="/assets/media/others/marelia3.png"
                    alt="vtuber-marelia"
                    className="icon-service2"
                  />
                </div>
              </div>
              <div className="slick-slide">
                <div className="case-study-featured-thumb">
                  <Image
                    width={740}
                    height={740}
                    src="/assets/media/others/aplikasiizakat.png"
                    alt="absensi"
                    style={{
                      borderRadius: "36px",
                    }}
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
