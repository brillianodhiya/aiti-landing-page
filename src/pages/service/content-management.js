import Head from "next/head";
import React from "react";
import CallHooks from "@aiti/components/CallHooks";
import { Banner } from "@aiti/components/service/Banner";
import Footer from "@aiti/components/Footer";
import OffCanvas from "@aiti/components/OffCanvas";
import CallToAction from "@aiti/components/CallToAction";
import { ServiceBanner } from "@aiti/components/service/ServiceBanner";
import Image from "next/image";

const Page = () => {
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
          href="/assets/media/Asset_1.svg"
        />
      </Head>

      <ServiceBanner title={"Content Management"} />

      <section class="section section-padding bg-color-light pb--70">
        <div class="container">
          <div class="section-heading mb--90">
            <span class="subtitle">Process</span>
            <h2 class="title">Our logo design process</h2>
            <p>
              Our comprehensive logo design strategy ensures a perfectly crafted
              logo for your business.
            </p>
          </div>
          <div
            class="process-work"
            data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-delay="100"
          >
            <div class="thumbnail paralax-image">
              <Image
                src="/assets/media/others/process-1.png"
                alt="Thumbnail"
                width={410}
                height={410}
              />
            </div>
            <div class="content">
              <span class="subtitle">Step One</span>
              <h3 class="title">Discover</h3>
              <p>
                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
                lorem. In vel hendrerit nisi. Vestibulum eget risus velit.
                Aliquam tristique libero at dui sodales, et placerat orci
                lobortis. Maecenas ipsum neque, elementum id dignissim et,
                imperdiet vitae mauris.
              </p>
            </div>
          </div>
          <div
            class="process-work content-reverse"
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-delay="100"
          >
            <div class="thumbnail paralax-image">
              <Image
                src="/assets/media/others/process-2.png"
                alt="Thumbnail"
                width={410}
                height={410}
              />
            </div>
            <div class="content">
              <span class="subtitle">Step Two</span>
              <h3 class="title">Prototype</h3>
              <p>
                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
                lorem. In vel hendrerit nisi. Vestibulum eget risus velit.
                Aliquam tristique libero at dui sodales, et placerat orci
                lobortis. Maecenas ipsum neque, elementum id dignissim et,
                imperdiet vitae mauris.
              </p>
            </div>
          </div>
          <div
            class="process-work"
            data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-delay="100"
          >
            <div class="thumbnail paralax-image">
              <Image
                src="/assets/media/others/process-3.png"
                alt="Thumbnail"
                width={410}
                height={410}
              />
            </div>
            <div class="content">
              <span class="subtitle">Step Three</span>
              <h3 class="title">Test</h3>
              <p>
                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
                lorem. In vel hendrerit nisi. Vestibulum eget risus velit.
                Aliquam tristique libero at dui sodales, et placerat orci
                lobortis. Maecenas ipsum neque, elementum id dignissim et,
                imperdiet vitae mauris.
              </p>
            </div>
          </div>
          <div
            class="process-work content-reverse"
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-delay="100"
          >
            <div class="thumbnail paralax-image">
              <Image
                src="/assets/media/others/process-4.png"
                alt="Thumbnail"
                width={410}
                height={410}
              />
            </div>
            <div class="content">
              <span class="subtitle">Step four</span>
              <h3 class="title">Build</h3>
              <p>
                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
                lorem. In vel hendrerit nisi. Vestibulum eget risus velit.
                Aliquam tristique libero at dui sodales, et placerat orci
                lobortis. Maecenas ipsum neque, elementum id dignissim et,
                imperdiet vitae mauris.
              </p>
            </div>
          </div>
        </div>
        <ul class="shape-group-17 list-unstyled">
          <li class="shape shape-1">
            {/* <Image
              src="/assets/media/others/bubble-24.png"
              alt="Bubble"
              width={610}
              height={460}
            /> */}
          </li>
          <li class="shape shape-2">
            <Image
              src="/assets/media/others/bubble-23.png"
              alt="Bubble"
              width={1005}
              height={1338}
            />
          </li>
          <li class="shape shape-3">
            <Image
              src="/assets/media/others/line-4.png"
              alt="Line"
              width={1682}
              height={445}
            />
          </li>
          <li class="shape shape-4">
            <Image
              src="/assets/media/others/line-5.png"
              alt="Line"
              width={1883}
              height={498}
            />
          </li>
          <li class="shape shape-5">
            <Image
              src="/assets/media/others/line-4.png"
              alt="Line"
              width={1682}
              height={445}
            />
          </li>
          <li class="shape shape-6">
            <Image
              src="/assets/media/others/line-5.png"
              alt="Line"
              width={1883}
              height={498}
            />
          </li>
        </ul>
      </section>

      <section class="section section-padding">
        <div class="container">
          <div class="section-heading">
            <span class="subtitle">Our Project</span>
            <h2 class="title">Featured Designs</h2>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="project-grid">
                <div class="thumbnail">
                  <a href="single-portfolio.html">
                    <Image
                      src="/assets/media/project/project-1.png"
                      alt="project"
                      width={610}
                      height={460}
                    />
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="single-portfolio.html">Creative Agency</a>
                  </h4>
                  <span class="subtitle">Full Branding, Website, App</span>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="project-grid">
                <div class="thumbnail">
                  <a href="single-portfolio.html">
                    <Image
                      src="/assets/media/project/project-2.png"
                      alt="project"
                      width={610}
                      height={460}
                    />
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="single-portfolio.html">Digital Marketing</a>
                  </h4>
                  <span class="subtitle">Logo, Website & Mobile App</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul class="shape-group-16 list-unstyled">
          <li class="shape shape-1">
            <Image
              src="/assets/media/others/circle-2.png"
              alt="circle"
              width={886}
              height={888}
            />
          </li>
          <li class="shape shape-3">
            <Image
              src="/assets/media/others/bubble-1.png"
              alt="Line"
              width={88}
              height={88}
            />
          </li>
        </ul>
      </section>

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

export default Page;
