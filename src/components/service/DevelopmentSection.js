import React from "react";
import Image from "next/image";
import Link from "next/link";

export const DevelopmentSection = () => {
  return (
    <div className="section section-padding bg-color-light" id="section2">
      <div className="container">
        <div className="section-heading heading-left">
          <span className="subtitle">Service</span>
          <h2 className="title">Development</h2>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="100"
          >
            <div className="services-grid service-style-2">
              <div className="thumbnail">
                <Image
                  src="/assets/media/icon/icon-31.png"
                  width={90}
                  height={90}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service/content-management">
                    Content Management
                  </Link>
                </h5>
                <p title="kami menyediakan solusi efisien untuk mengelola dan menyusun konten digital secara sistematis.">
                  kami menyediakan solusi efisien untuk mengelola dan menyusun
                  konten digital secara sistematis.
                </p>
                <Link href="/service/content-management" className="more-btn">
                  Cari tahu lebih lanjut
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <div className="services-grid service-style-2">
              <div className="thumbnail">
                <Image
                  src="/assets/media/icon/icon-32.png"
                  width={90}
                  height={90}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service/mobile-app">Mobile app development</Link>
                </h5>
                <p title="Menyediakan  pengembangan aplikasi mobile yang berkualitas sebagai solusi.">
                  Menyediakan pengembangan aplikasi mobile yang berkualitas
                  sebagai solusi.
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
            data-sal-duration="800"
            data-sal-delay="300"
          >
            <div className="services-grid service-style-2">
              <div className="thumbnail">
                <Image
                  src="/assets/media/icon/icon-33.png"
                  width={90}
                  height={90}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service/e-commerce">eCommerce</Link>
                </h5>
                <p title="Memberikan solusi eCommerce yang komprehensif untuk pertumbuhan bisnis online.">
                  Memberikan solusi eCommerce yang komprehensif untuk
                  pertumbuhan bisnis online.
                </p>
                <Link href="/service/e-commerce" className="more-btn">
                  Cari tahu lebih lanjut
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="100"
          >
            <div className="services-grid service-style-2">
              <div className="thumbnail">
                <Image
                  src="/assets/media/icon/icon-31.png"
                  width={90}
                  height={90}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service/iot-monitoring">IoT Monitoring</Link>
                </h5>
                <p title="Menyediakan solusi monitoring dan pengelolaan Internet of Things (IoT) untuk pemantauan dan pengontrolan yang efisien.">
                  Menyediakan solusi monitoring dan pengelolaan Internet of
                  Things (IoT) untuk pemantauan dan pengontrolan yang efisien.
                </p>
                <Link href="/service/iot-monitoring" className="more-btn">
                  Cari tahu lebih lanjut
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <div className="services-grid service-style-2">
              <div className="thumbnail">
                <Image
                  src="/assets/media/icon/icon-32.png"
                  width={90}
                  height={90}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service/blogger">Blogger</Link>
                </h5>
                <p title="Menyediakan layanan pembuatan konten blog yang menarik dan relevan.">
                  Menyediakan layanan pembuatan konten blog yang menarik dan
                  relevan.
                </p>
                <Link href="/service/blogger" className="more-btn">
                  Cari tahu lebih lanjut
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="300"
          >
            <div className="services-grid service-style-2">
              <div className="thumbnail">
                <Image
                  src="/assets/media/icon/icon-33.png"
                  width={90}
                  height={90}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service/invitation">Undangan</Link>
                </h5>
                <p title="Menyediakan berbagai desain undangan kreatif untuk acara-acara khusus.">
                  Menyediakan berbagai desain undangan kreatif untuk acara-acara
                  khusus.
                </p>
                <Link href="/service/invitation" className="more-btn">
                  Cari tahu lebih lanjut
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="300"
          >
            <div className="services-grid service-style-2">
              <div className="thumbnail">
                <Image
                  src="/assets/media/icon/icon-33.png"
                  width={90}
                  height={90}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service/landing-page">Landing Page</Link>
                </h5>
                <p title="Memberikan desain landing page yang menarik dan efektif untuk meningkatkan konversi.">
                  Memberikan desain landing page yang menarik dan efektif untuk
                  meningkatkan konversi.
                </p>
                <Link href="/service/landing-page" className="more-btn">
                  Cari tahu lebih lanjut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
