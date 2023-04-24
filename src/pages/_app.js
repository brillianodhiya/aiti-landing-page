import "@aiti/styles/globals.css";
import "@aiti/styles/css/vendor/bootstrap.min.css";
import "@aiti/styles/css/vendor/font-awesome.css";
import "@aiti/styles/css/vendor/slick.css";
import "@aiti/styles/css/vendor/slick-theme.css";
import "@aiti/styles/css/vendor/magnific-popup.css";
import "@aiti/styles/css/vendor/green-audio-player.min.css";
import "@aiti/styles/css/app.css";
import "@aiti/styles/css/vendor/sal.css";

export function reportWebVitals(metric) {
  console.log(metric);
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
