import Script from "next/script";
import React from "react";

const SciprtThirdParty = () => {
  return (
    <>
      <Script strategy="afterInteractive" src="assets/js/app.js" />
    </>
  );
};

export default SciprtThirdParty;
