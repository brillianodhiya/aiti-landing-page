import CallHooks from "@aiti/components/CallHooks";
import CallToAction from "@aiti/components/CallToAction";
import Footer from "@aiti/components/Footer";
import OffCanvas from "@aiti/components/OffCanvas";
import { TeamBanner } from "@aiti/components/team/TeamBanner";
import { TeamDetail } from "@aiti/components/team/TeamDetail";

import Head from "next/head";
import React from "react";
const Page = () => {
  return (
    <div>
      <CallHooks />
      <Head>
        <title>
          Solusi Digital Berkualitas Tinggi dari AITI Lokal | Ali Inovasi
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
          href="/assets/media/favicon.png"
        />
      </Head>
      <TeamBanner />
      <TeamDetail />
      {/*=====================================*/}
      {/*=     Call To Action Area Start     =*/}
      {/*=====================================*/}
      <CallToAction />
      {/*=====================================*/}
      {/*=        Footer Area Start       	=*/}
      {/*=====================================*/}
      <Footer />
      {/*=====================================*/}
      {/*=       Offcanvas Menu Area       	=*/}
      {/*=====================================*/}
      <OffCanvas />
    </div>
  );
};

export default Page;