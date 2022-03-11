// import "bootstrap/dist/css/bootstrap.min.css";
import Router from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import '../styles/globals.css';
import { useRouter } from "next/router";
import "../styles/page-styles.scss";
import { Alert } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setloading] = useState(true);
  useEffect(() => {
    window.onload = () => {
     setloading(false);
    };
  }, []);

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link href="/fonts/style.css" rel="stylesheet" />
        <link rel="shortcut icon" href="imag/favicon.svg" type="image/x-icon" />
        <script src="https://unpkg.com/jarallax@1/dist/jarallax.min.js"></script>

        <script src="https://unpkg.com/jarallax@1/dist/jarallax-video.min.js"></script>
      </Head>
      {loading&&<PreloaderApp />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

const PreloaderApp = () => {
  return (
    <div class="preloaderBg" id="preloader" >
      <div class="preloader"></div>
      <div class="preloader2"></div>
    </div>
  );
};
