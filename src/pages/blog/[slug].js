import CallHooks from "@aiti/components/CallHooks";
import CallToAction from "@aiti/components/CallToAction";
import Footer from "@aiti/components/Footer";
import OffCanvas from "@aiti/components/OffCanvas";
import { Banner } from "@aiti/components/blog/Banner";
import { Post } from "@aiti/components/blog/Post";
import { RecentPost } from "@aiti/components/blog/RecentPost";
import { Widget } from "@aiti/components/blog/Widget";
import Head from "next/head";
import React from "react";
const Blog = () => {
  return (
    <div>
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
          href="/assets/media/favicon.png"
        />
      </Head>
      <Banner title="How to Increase Your ROI Through scientific SEM?" />
      <section className="section-padding-equal">
        <div className="container">
          <div className="row row-40">
            <Post />
            <Widget />
          </div>
        </div>
      </section>
      <RecentPost />
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

export default Blog;
