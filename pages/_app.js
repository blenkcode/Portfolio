import React, { useState, useEffect } from "react";
import Head from "next/head";
import Preloader from "../components/PreLoader";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    const loadResources = () => {
      return new Promise((resolve) => {
        const images = document.querySelectorAll("img");
        let loadedCount = 0;

        images.forEach((image) => {
          if (image.complete) {
            loadedCount++;
          } else {
            image.addEventListener("load", () => {
              loadedCount++;
              if (loadedCount === images.length) {
                resolve();
              }
            });
          }
        });

        if (images.length === 0) {
          resolve();
        }
      });
    };

    loadResources().then(handleLoad);
  }, []);

  return (
    <>
      <Head>
        <title>Valentin Mor</title>
        <link rel="icon" href="/logo2.png" />
      </Head>
      {loading ? <Preloader /> : <Component {...pageProps} />}
    </>
  );
}

export default App;
