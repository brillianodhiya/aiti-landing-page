import Head from "next/head";
import React from "react";
import CallHooks from "@aiti/components/CallHooks";
import { Banner } from "@aiti/components/service/Banner";
import { SectionContainer } from "@aiti/components/service/SectionContainer";
import { DesignSection } from "@aiti/components/service/DesignSection";
import Footer from "@aiti/components/Footer";
import OffCanvas from "@aiti/components/OffCanvas";
import { DevelopmentSection } from "@aiti/components/service/DevelopmentSection";
import { OnlineMarketingSection } from "@aiti/components/service/OnlineMarketingSection";
import { BusinessSection } from "@aiti/components/service/BusinessSection";
import { TechnologySection } from "@aiti/components/service/TechnologySection";
import { ContentStrategy } from "@aiti/components/service/ContentStrategy";
import CallToAction from "@aiti/components/CallToAction";

const Services = () => {
  return (
    <>
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
          href="assets/media/favicon.png"
        />
      </Head>

      <Banner />
      <div className="service-scroll-navigation-area">
        <SectionContainer />
        <DesignSection />
        <DevelopmentSection />
        <OnlineMarketingSection />
        <BusinessSection />
        <TechnologySection />
        <ContentStrategy />
      </div>
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
    </>
  );
};

export default Services;
