import Banner from "@aiti/components/Banner";
import Headers from "@aiti/components/Headers";
import SciprtThirdParty from "@aiti/components/SciprtThirdParty";
import ThemeSwitcher from "@aiti/components/ThemeSwitcher";
import useBackToTop from "@aiti/hooks/useBackToTop";
import useMobileMenuActivation from "@aiti/hooks/useMobileMenuActivation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useMobileMenuActivation();
  useBackToTop();
  return (
    <>
      <Head>
        <title>AITI | Ali Inovasi Teknologi Indonesia</title>
        <meta
          name="description"
          content="Ali Inovasi Teknologi Indonesia (AITI) is a technology company that provides innovative solutions to various industries. Our company aims to bring cutting-edge technology to our clients to help them improve their business performance and efficiency. Explore our website to learn more about our services and products."
        />
        <meta
          name="keywords"
          content="Ali Inovasi Teknologi Indonesia, AITI, technology company, innovative solutions, cutting-edge technology, business performance, efficiency, services, products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/media/favicon.png"
        />
      </Head>
      <SciprtThirdParty />
      <main>
        {/*[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  	<![endif]*/}
        <a href="#main-wrapper" id="backto-top" className="back-to-top">
          <i className="far fa-angle-double-up" />
        </a>
        {/* Preloader Start Here */}
        <div id="preloader" />
        {/* Preloader End Here */}
        <ThemeSwitcher />
        <div id="main-wrapper" className="main-wrapper">
          {/*=====================================*/}
          {/*=        Header Area Start       	=*/}
          {/*=====================================*/}
          <Headers />
          {/*=====================================*/}
          {/*=        Banner Area Start         =*/}
          {/*=====================================*/}
          <Banner />
          {/*=====================================*/}
          {/*=        Service Area Start         =*/}
          {/*=====================================*/}
        </div>
      </main>
    </>
  );
}
