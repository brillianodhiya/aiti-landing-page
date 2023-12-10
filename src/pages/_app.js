import "@aiti/styles/globals.css";
import "@aiti/styles/css/vendor/bootstrap.min.css";
import "@aiti/styles/css/vendor/font-awesome.css";
import "@aiti/styles/css/vendor/slick.css";
import "@aiti/styles/css/vendor/slick-theme.css";
import "@aiti/styles/css/vendor/magnific-popup.css";
import "@aiti/styles/css/vendor/green-audio-player.min.css";
import "@aiti/styles/css/app.css";
import "@aiti/styles/css/vendor/sal.css";
import ThemeSwitcher from "@aiti/components/ThemeSwitcher";
import SciprtThirdParty from "@aiti/components/SciprtThirdParty";
import Headers from "@aiti/components/Headers";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function reportWebVitals(metric) {
  console.log(metric);
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <SciprtThirdParty />
      <SpeedInsights />
      <main>
        {/*[if lte IE 9]>
    <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
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
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
