import CallHooks from "@aiti/components/CallHooks";
import Footer from "@aiti/components/Footer";
import OffCanvas from "@aiti/components/OffCanvas";
import { Banner } from "@aiti/components/contact/Banner";
import { ContactArea } from "@aiti/components/contact/ContactArea";
import { LocationArea } from "@aiti/components/contact/LocationArea";
import Head from "next/head";
import React from "react";

const Contact = () => {
  return (
    <>
      <CallHooks />
      <Head>
        <title>
          Solusi Digital Berkualitas Tinggi dari AITI Lokal | Agensi Inovasi
          Teknologi Indonesia
        </title>
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
          href="assets/media/favicon.png"
        />
      </Head>
      <Banner />
      <ContactArea />
      {/* <LocationArea /> */}
      {/*=====================================*/}
      {/*=        Footer Area Start       	=*/}
      {/*=====================================*/}
      <div className="pt--150 pt_lg--100 pt_md--80 pt_sm--60">
        <Footer />
      </div>
      {/*=====================================*/}
      {/*=       Offcanvas Menu Area       	=*/}
      {/*=====================================*/}
      <OffCanvas />
    </>
  );
};

export default Contact;
