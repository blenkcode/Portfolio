import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Valentin Mor</title>
        <link rel="icon" href="/logo2.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
