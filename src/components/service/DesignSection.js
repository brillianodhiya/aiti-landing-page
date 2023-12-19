import React from "react";
import Image from "next/image";
import Link from "next/link";

export const DesignSection = () => {
  return (
    <>
      <div className="section section-padding" id="section1">
        <div className="container">
          <div className="section-heading heading-left">
            <span className="subtitle">Service</span>
            <h2 className="title">Desain</h2>
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
                    src="/assets/media/icon/icon-29.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service/ui-design">Desain UI/UX</Link>
                  </h5>
                  <p title="Kami merancang desain yang berfokus pada pengalaman pengguna yang  menarik agar penguna merasa puas dalam mengunjungi situs">
                    Kami merancang desain yang berfokus pada pengalaman pengguna
                    yang menarik agar penguna merasa puas dalam mengunjungi
                    situs.
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
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <div className="services-grid service-style-2">
                <div className="thumbnail">
                  <Image
                    src="/assets/media/icon/icon-27.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service/graphic-design">Desain Grafis</Link>
                  </h5>
                  <p title="Kami menawarkan layanan desain grafis kreatif untuk kebutuhan branding, promosi, dan komunikasi visual.">
                    Kami menawarkan layanan desain grafis kreatif untuk
                    kebutuhan branding, promosi, dan komunikasi visual.
                  </p>

                  <Link href="/service/graphic-design" className="more-btn">
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
                    src="/assets/media/icon/icon-28.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service/3d-modeling">3D Modeling</Link>
                  </h5>
                  <p title="Memberikan layanan pembuatan model 3D yang realistis untuk keperluan visualisasi dan pengembangan produk.">
                    Memberikan layanan pembuatan model 3D yang realistis untuk
                    keperluan visualisasi dan pengembangan produk.
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
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div className="services-grid service-style-2">
                <div className="thumbnail">
                  <Image
                    src="/assets/media/icon/icon-4.png"
                    alt="icon"
                    width={102}
                    height={90}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service/illustration">Ilustrasi</Link>
                  </h5>
                  <p title="Menyediakan layanan ilustrasi kreatif dan unik untuk berbagai keperluan bidang visualisasi gambar.">
                    Menyediakan layanan ilustrasi kreatif dan unik untuk
                    berbagai keperluan bidang visualisasi gambar.
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
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <div className="services-grid service-style-2">
                <div className="thumbnail">
                  <Image
                    src="/assets/media/icon/icon-30.png"
                    alt="icon"
                    height={90}
                    width={90}
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="/service/live2d-design">Live2d Desain</Link>
                  </h5>
                  <p title="Kami menyediakan layanan pengembangan memungkinkan karakter 2D untuk hidup dan berinteraksi dengan audiens.">
                    Kami menyediakan layanan pengembangan memungkinkan karakter
                    2D untuk hidup dan berinteraksi dengan audiens.
                  </p>
                  <Link href="/service/live2d-design" className="more-btn">
                    Cari tahu lebih lanjut
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
