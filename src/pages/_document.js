import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/jquery-3.6.0.min.js"
        ></Script>

        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/jquery.magnific-popup.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/js.cookie.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/jquery.style.switcher.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/jquery.countdown.min.js"
        ></Script>

        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/jquery.nav.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/sal.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/imagesloaded.pkgd.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/counterup.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/waypoints.min.js"
        ></Script>

        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/slick.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/green-audio-player.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/isotope.pkgd.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/tilt.js"
        ></Script>

        <Script
          strategy="beforeInteractive"
          src="assets/js/vendor/bootstrap.min.js"
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
