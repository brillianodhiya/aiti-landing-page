import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <section className="section section-padding">
      <div className="container">
        <div className="section-heading heading-left">
          <span className="subtitle">Apa kata orang tentang kami?</span>
          <h2
            className="title"
            style={{
              fontWeight: "bold",
            }}
          >
            Beberapa testimoni
          </h2>
          <p>
            Kami bersama dengan klien kami telah menciptakan beberapa solusi
            digital yang luar biasa untuk bisnis mereka.
          </p>
        </div>
        <div className="row">
          <div
            className="col-lg-4"
            data-sal="slide-up"
            data-sal-duration={1000}
            data-sal-delay={100}
          >
            <div className="testimonial-grid active">
              {/* <span className="social-media">
                <Image
                  width={50}
                  height={50}
                  src="/assets/media/icon/lazisnu.png"
                  alt="Lazisnu"
                />
              </span> */}
              <p>
                “ Inovasi yang bagus dengan beralih ke era digital sekarang,
                memang diperlukan anak muda yang punya banyak ide kreatif. ”
              </p>
              <div className="author-info">
                <div className="thumb">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/media/testimonial/testimoni1.jpg"
                    alt="Review Lazisnu Trenggalek"
                  />
                </div>
                <div className="content">
                  <span className="name">Abdur Rohman</span>
                  <span className="designation">
                    Sekretaris Lzisnu Trenggalek
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-sal="slide-up"
            data-sal-duration={1000}
            data-sal-delay={200}
          >
            <div className="testimonial-grid">
              {/* <span className="social-media">
                <Image
                  width={50}
                  height={50}
                  src="/assets/media/icon/google-2.png"
                  alt="google"
                />
              </span> */}
              <p>
                “ Desain karakter unik dan pengerjaan nya cepat, bahkan dapat
                beberapa ekspresi.”
              </p>
              <br />
              <div
                className="author-info"
                style={{
                  marginTop: "8px",
                }}
              >
                <div className="thumb">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/media/testimonial/testimoni3.png"
                    alt="Review Vtuber Bellavia"
                  />
                </div>
                <div className="content">
                  <span className="name">Bellavia</span>
                  <span className="designation">VTuber</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-sal="slide-up"
            data-sal-duration={1000}
            data-sal-delay={300}
          >
            <div className="testimonial-grid">
              <p>
                “ Dengan Monitoring menggunakan IoT membuat bisnis saya semakin
                mudah di atur dan lebih hemat dalam penggunaan sumber daya yang
                ada.”
              </p>
              <div className="author-info">
                <div className="thumb">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/media/testimonial/hafidh.jpg"
                    alt="Review Hafidh Hanan"
                  />
                </div>
                <div className="content">
                  <span className="name">Hafidh Hanan</span>
                  <span className="designation">Wirausaha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-4 list-unstyled">
        <li className="shape-1">
          <Image
            width={88}
            height={88}
            src="/assets/media/others/bubble-1.png"
            alt="Bubble"
          />
        </li>
      </ul>
    </section>
  );
};

export default Testimonial;
