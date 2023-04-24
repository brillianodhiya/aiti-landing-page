import Script from "next/script";
import React from "react";

const SciprtThirdParty = () => {
  return (
    <>
      <Script strategy="afterInteractive" src="assets/js/app.js" />
      <Script
        strategy="afterInteractive"
        src="assets/js/vendor/bootstrap.min.js"
      ></Script>

      <Script
        strategy="afterInteractive"
        src="assets/js/vendor/tilt.js"
      ></Script>
    </>
  );
};

export default SciprtThirdParty;
