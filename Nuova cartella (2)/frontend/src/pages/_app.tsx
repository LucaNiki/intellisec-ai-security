import "../styles/cyberpunk.css";
import React from "react";
import Header from "../components/ui/Header";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;