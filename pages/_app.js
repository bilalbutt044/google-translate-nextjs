import "../globals.css";

export default function App({ Component, pageProps }) {
  if (typeof window === "undefined") {
    return <></>;
  } else return <Component {...pageProps} />;
}
