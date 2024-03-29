"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
export const ContactArea = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // const JSONdata = JSON.stringify(data);

    // await Axios.post("https://smtp.we-iots.com/api/send/email", data);
    window.open(
      `mailto:aitilokal@gmail.com?subject=${
        event.target.email.value +
        " | " +
        event.target.name.value +
        ": Send Email from contact Us"
      }&body=${event.target.message.value}`,
      "/blank"
    );
  };

  return (
    <section className="section section-padding">
      <Head>
        <title>Hubungi kami | Agensi Inovasi Teknologi Indonesia</title>
        <meta
          name="description"
          content="AITI Lokal adalah solusi digital terbaik untuk bisnis Anda. Kami menyediakan layanan pengembangan web, mobile, desktop, dan desain yang berkualitas tinggi dengan harga terjangkau. Dapatkan solusi digital yang tepat untuk bisnis Anda bersama AITI Lokal."
        />
        <meta
          name="keywords"
          content="Solusi Digital, Web Development, Mobile Development, Desktop Development, Desain, AITI Lokal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/media/Asset_1.svg"
        />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="contact-form-box shadow-box mb--30">
              <h3 className="title">
                Ambil langkah pertama untuk proyek digital Anda
              </h3>
              <form
                // method="POST"
                // action="mail.php"
                onSubmit={handleSubmit}
                name="formcontactus"
                className="axil-contact-form"
              >
                <div className="form-group">
                  <label>Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    required
                  />
                </div>

                <div className="form-group mb--40">
                  <label>Bagaimana kami dapat membantu Anda?</label>
                  <textarea
                    name="message"
                    id="contact-message"
                    className="form-control textarea"
                    cols="30"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="axil-btn btn-fill-primary btn-fluid btn-primary"
                    name="submit-btn"
                  >
                    Ambil langkah pertama
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--40">
              <h4 className="title">Whatsapp</h4>
              <p>
                Pelayanan kami akan selalu ada untuk Anda. Kami siap membantu
                Anda.
              </p>

              <h5
                className="subtitle"
                style={{
                  color: "#fff",
                  marginBottom: "0px",
                }}
              >
                Brilliano Dhiya
              </h5>
              <h4 className="phone-number">
                <a target="_blank" href="https://wa.me/6285155436866">
                  +62 851-5543-6866
                </a>
              </h4>
              {/* <br />
              <h5
                className="subtitle"
                style={{
                  color: "#fff",
                  marginBottom: "0px",
                }}
              >
                Aulia Zulfaa
              </h5>
              <h4 className="phone-number">
                <a target="_blank" href="https://wa.me/6285175016160">
                  +62 851-7501-6160
                </a>
              </h4> */}
            </div>
            <div className="contact-info mb--30">
              <h4 className="title">Email</h4>
              <p>
                Kami akan merespon email Anda dalam waktu 24 jam. Jika Anda
                membutuhkan bantuan segera, silakan hubungi kami melalui
                Whatsapp.
              </p>
              <h4 className="phone-number">
                <a href="mailto:aitilokal@gmail.com">aitilokal@gmail.com</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-12">
        <li className="shape shape-1">
          <Image
            src="/assets/media/others/bubble-2.png"
            width={150}
            height={150}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <Image
            src="/assets/media/others/bubble-1.png"
            alt="Bubble"
            width={88}
            height={88}
          />
        </li>
        <li className="shape shape-3">
          <Image
            src="/assets/media/others/circle-3.png"
            height={811}
            width={824}
            alt="Circle"
          />
        </li>
      </ul>
    </section>
  );
};
