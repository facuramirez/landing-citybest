// import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

import "../styles/page-styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/ade854c1b2.js"
          crossorigin="anonymous"
        ></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass:wght@100;300;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="imag/favicon.svg" type="image/x-icon" />
        <script src="https://unpkg.com/jarallax@1/dist/jarallax.min.js"></script>

        <script src="https://unpkg.com/jarallax@1/dist/jarallax-video.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
