import Script from "next/script";
import React from "react";

const SciprtThirdParty = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="assets/js/vendor/jquery-3.6.0.min.js"
      />
      <Script strategy="lazyOnload" src="assets/js/vendor/bootstrap.min.js" />
      <Script
        strategy="lazyOnload"
        src="assets/js/vendor/isotope.pkgd.min.js"
      />
      <Script
        strategy="lazyOnload"
        src="assets/js/vendor/imagesloaded.pkgd.min.js"
      />
      <Script strategy="lazyOnload" src="assets/js/vendor/waypoints.min.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/counterup.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/slick.min.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/sal.js" />
      <Script
        strategy="lazyOnload"
        src="assets/js/vendor/jquery.magnific-popup.min.js"
      />
      <Script strategy="lazyOnload" src="assets/js/vendor/js.cookie.js" />
      <Script
        strategy="lazyOnload"
        src="assets/js/vendor/jquery.style.switcher.js"
      />
      <Script
        strategy="lazyOnload"
        src="assets/js/vendor/jquery.countdown.min.js"
      />
      <Script strategy="lazyOnload" src="assets/js/vendor/tilt.js" />
      <Script
        strategy="lazyOnload"
        src="assets/js/vendor/green-audio-player.min.js"
      />
      <Script strategy="lazyOnload" src="assets/js/vendor/jquery.nav.js" />
      <Script strategy="lazyOnload" src="assets/js/app.js" />
    </>
  );
};

export default SciprtThirdParty;
