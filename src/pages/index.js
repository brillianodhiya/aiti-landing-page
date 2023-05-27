import About from "@aiti/components/About";
import Banner from "@aiti/components/Banner";
import Blog from "@aiti/components/Blog";
import Brand from "@aiti/components/Brand";
import CallHooks from "@aiti/components/CallHooks";
import CallToAction from "@aiti/components/CallToAction";
import CaseStudy from "@aiti/components/CaseStudy";
import CenterUp from "@aiti/components/CenterUp";
import Footer from "@aiti/components/Footer";
import OffCanvas from "@aiti/components/OffCanvas";
import Pricing from "@aiti/components/Pricing";
import Projects from "@aiti/components/Projects";
import ServiceArea from "@aiti/components/ServiceArea";
import Testimonial from "@aiti/components/Testimonial";
import Head from "next/head";
import React from "react";

export default function Home() {
  // React.useEffect(() => {
  //   console.log(window.$(".slick-slider"));
  // }, []);

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
          href="assets/media/Asset_1.svg"
        />
      </Head>

      {/*=====================================*/}
      {/*=        Banner Area Start         =*/}
      {/*=====================================*/}
      <Banner />
      {/*=====================================*/}
      {/*=        Service Area Start         =*/}
      {/*=====================================*/}
      <ServiceArea />
      {/*=====================================*/}
      {/*=       Case Study Area Start       =*/}
      {/*=====================================*/}
      <CaseStudy />
      {/*=====================================*/}
      {/*=        About Area Start         =*/}
      {/*=====================================*/}
      <About />
      {/*=====================================*/}
      {/*=        Project Area Start         =*/}
      {/*=====================================*/}
      <Projects />
      {/*=====================================*/}
      {/*=        Counter Up Area Start      =*/}
      {/*=====================================*/}
      <CenterUp />
      {/*=====================================*/}
      {/*=        Testimonial Area Start      =*/}
      {/*=====================================*/}
      <Testimonial />
      {/*=====================================*/}
      {/*=        Pricing Area Start       	=*/}
      {/*=====================================*/}
      <Pricing />
      {/*=====================================*/}
      {/*=        Brand Area Start       	=*/}
      {/*=====================================*/}
      <Brand />
      {/*=====================================*/}
      {/*=        Blog Area Start       	    =*/}
      {/*=====================================*/}
      {/* <Blog /> */}
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
}
