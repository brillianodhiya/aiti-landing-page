/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="banner banner-style-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="banner-content"
              data-sal="slide-up"
              data-sal-duration={1000}
              data-sal-delay={100}
            >
              <h1 className="title">Solusi Digital Kreatif Bisnis Anda</h1>
              <span className="subtitle">
                Solusi Desain Produk Digital yang Tepat untuk Mengembangkan
                Bisnis Anda
              </span>
              <Link
                href="/contact"
                className="axil-btn btn-fill-primary btn-large"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <div
                className="large-thumb"
                data-sal="zoom-in"
                data-sal-duration={500}
                data-sal-delay={300}
              >
                <Image
                  width={630}
                  height={280}
                  src="/assets/media/banner/laptop.png"
                  alt="Laptop"
                  priority
                />
              </div>
              <ul className="list-unstyled shape-group">
                <li
                  className="shape shape-1"
                  data-sal="slide-right"
                  data-sal-duration={500}
                  data-sal-delay={400}
                >
                  <Image
                    width={392}
                    height={350}
                    src="/assets/media/banner/marker.png"
                    alt="Marker"
                    priority
                  />
                </li>
                <li
                  className="shape shape-2"
                  data-sal="slide-right"
                  data-sal-duration={500}
                  data-sal-delay={500}
                >
                  <Image
                    width={314}
                    height={110}
                    src="/assets/media/banner/chat-icon.png"
                    alt="Chat"
                  />
                </li>
                <li
                  className="shape shape-3"
                  data-sal="slide-left"
                  data-sal-duration={500}
                  data-sal-delay={600}
                >
                  <Image
                    width={289}
                    height={240}
                    src="/assets/media/banner/sticker.png"
                    alt="sticker"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-13">
        <li
          className="shape shape-1"
          data-sal="slide-down"
          data-sal-duration={500}
          data-sal-delay={100}
        >
          <Image
            width={485}
            height={209}
            src="/assets/media/others/bubble-18.png"
            alt="Bubble"
          />
        </li>
        <li
          className="shape shape-2"
          data-sal="slide-left"
          data-sal-duration={500}
          data-sal-delay={200}
        >
          <img
            width={617}
            height={904}
            src="/assets/media/others/bubble-19.webp"
            alt="Bubble"
          />
        </li>
        <li
          className="shape shape-3"
          data-sal="slide-left"
          data-sal-duration={500}
          data-sal-delay={700}
        >
          <img
            width={354}
            height={278}
            src="/assets/media/others/hand-2.webp"
            alt="Hand"
          />
        </li>
        <li
          className="shape shape-4"
          data-sal="slide-left"
          data-sal-duration={500}
          data-sal-delay={700}
        >
          <Image
            width={48}
            height={48}
            src="/assets/media/others/bubble-14.png"
            alt="Bubble"
          />
        </li>
        <li
          className="shape shape-5"
          data-sal="slide-left"
          data-sal-duration={500}
          data-sal-delay={700}
        >
          <Image
            width={32}
            height={32}
            src="/assets/media/others/bubble-14.png"
            alt="Bubble"
          />
        </li>
      </ul>
    </section>
  );
};

export default Banner;
