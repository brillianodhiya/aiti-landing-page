import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceArea = () => {
  return (
    <section className="section section-padding-equal bg-color-dark">
      <div className="container">
        <div className="section-heading heading-light-left">
          <span className="subtitle">
            Kami adalah agensi kreatif yang fokus pada desain dan pengembangan
            aplikasi.
          </span>
          <h2 className="title">Solusi Digital Kreatif Bisnis Anda</h2>
          <p className="opacity-50">
            Beberapa layanan yang kami tawarkan untuk membantu bisnis Anda
            berkembang.
          </p>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={100}
          >
            <div className="services-grid active">
              <div className="thumbnail">
                <Image
                  width={200}
                  height={200}
                  src="/assets/media/icon/uiux.png"
                  alt="icon"
                  className="icon-service"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  {" "}
                  <Link href="/service/ui-design">Desain UI/UX</Link>
                </h5>
                <p>
                  Desain UI/UX Dengan pengetahuan dan keterampilan yang mendalam
                  di bidang desain UI/UX, kami dapat memberikan solusi yang
                  menarik, mudah digunakan, dan sesuai dengan tujuan pengguna
                  dan bisnis Anda.
                </p>
                <Link href="/service/ui-design" className="more-btn">
                  Cari tahu lebih lanjut
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={200}
          >
            <div className="services-grid">
              <div className="thumbnail">
                <Image
                  width={200}
                  height={200}
                  className="icon-service"
                  src="/assets/media/icon/software-developemt.png"
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  {" "}
                  <Link href="service/mobile-app">Pengembangan Aplikasi</Link>
                </h5>
                <p>
                  Dengan pengalaman kerja yang luas dan berbagai keahlian di
                  bidang pengembangan aplikasi baik, kami dapat memberikan
                  solusi yang dapat dipercaya dan sesuai dengan anggaran Anda.
                </p>
                <Link href="/service/mobile-app" className="more-btn">
                  Cari tahu lebih lanjut
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={300}
          >
            <div className="services-grid">
              <div className="thumbnail">
                <Image
                  width={200}
                  height={200}
                  src="/assets/media/icon/illustration.png"
                  alt="icon"
                  className="icon-service"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  {" "}
                  <Link href="/service/illustration">Illustrasi</Link>
                </h5>
                <p>
                  Dengan pengalaman dalam menciptakan berbagai jenis gambar,
                  mulai dari ilustrasi editorial hingga animasi karakter, tim
                  kami siap membantu Anda memberikan pesan Anda dengan cara yang
                  paling efektif.
                </p>
                <Link href="/service/illustration" className="more-btn">
                  Cari tahu lebih lanjut
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={100}
          >
            <div className="services-grid">
              <div className="thumbnail">
                <Image
                  width={200}
                  height={200}
                  src="/assets/media/icon/9717283.png"
                  alt="icon"
                  className="icon-service"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  {" "}
                  <Link href="/service/3d-modeling">3D Modeling</Link>
                </h5>
                <p>
                  Layanan 3D Modeling kami mencakup desain, modifikasi, edit,
                  dan konversi berbagai format file 3D. Kami menyediakan pilihan
                  fleksibel dalam hal gaya dan tingkat detail yang diinginkan.
                </p>
                <Link href="/service/3d-modeling" className="more-btn">
                  Cari tahu lebih lanjut
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={200}
          >
            <div className="services-grid">
              <div className="thumbnail">
                <Image
                  width={200}
                  height={200}
                  src="/assets/media/icon/l2d.png"
                  alt="icon"
                  className="icon-service"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  {" "}
                  <Link href="/service/live2d-character">Karakter Live2D</Link>
                </h5>
                <p>
                  Dengan karakter Live2D, Anda dapat memberikan pengalaman
                  interaktif yang lebih mengasyikkan kepada audiens Anda. Bukan
                  hanya itu, produk anda akan terlihat lebih atraktif dan
                  menarik perhatian.
                </p>
                <Link href="/service/live2d-character" className="more-btn">
                  Cari tahu lebih lanjut
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-sal="slide-up"
            data-sal-duration={800}
            data-sal-delay={300}
          >
            <div className="services-grid">
              <div className="thumbnail">
                <Image
                  width={200}
                  height={200}
                  src="/assets/media/icon/graphic-design3.png"
                  alt="icon freepik-image"
                  // className="for-blur"
                  className="icon-service"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  {" "}
                  <Link href="/service/graphic-design">Desain Grafis</Link>
                </h5>
                <p>
                  Desain Grafis Dengan pengetahuan dan keterampilan yang
                  mendalam di bidang desain grafis, kami dapat memberikan solusi
                  yang menarik, informatif, dan persuasif untuk
                  mengkomunikasikan pesan visual Anda.
                </p>
                <Link href="/service/graphic-design" className="more-btn">
                  Cari tahu lebih lanjut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-10">
        <li className="shape shape-1">
          <Image
            width={600}
            height={600}
            src="/assets/media/others/circle-1.png"
            alt="Circle"
          />
        </li>
        <li className="shape shape-2">
          <Image
            width={550}
            height={550}
            src="/assets/media/others/line-3.png"
            alt="Circle"
          />
        </li>
        <li className="shape shape-3">
          <Image
            width={105}
            height={106}
            src="/assets/media/others/bubble-5.png"
            alt="Circle"
          />
        </li>
      </ul>
    </section>
  );
};

export default ServiceArea;
