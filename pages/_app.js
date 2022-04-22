import React from "react";
import Head from "next/head";
import Popup from "../components/Popup";
import "../styles/globals.scss";
import { useState, useEffect, useRef } from "react";
import MobileButtons from "../components/MobileButtons";
export const ToglePopup = React.createContext();
export const ServicesContext = React.createContext();

function MyApp({ Component, pageProps }) {
    const [popupState, setPopupState] = useState("close");
    const [serviceClassname, setServiceClassname] = useState("");
    const reference = useRef();

    useEffect(() => {
        const widthObserver = new ResizeObserver((entries) => {
            if (entries[0].contentRect.width <= 480) {
                setServiceClassname("mobile");
            } else if (
                entries[0].contentRect.width >= 481 &&
                entries[0].contentRect.width <= 1310
            ) {
                setServiceClassname("medium");
            } else {
                setServiceClassname("big");
            }
        });
        // widthObserver.observe(document.getElementById("card_container"));
        widthObserver.observe(document.body);
    }, [serviceClassname]);

    return (
        <ToglePopup.Provider value={{ popupState, setPopupState }}>
            <ServicesContext.Provider
                value={{ serviceClassname, setServiceClassname }}
            >
                <Head>
                    <meta name="robots" content="none" />
                    <title>Ремонт стиральных машин</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta
                        name="description"
                        content="Ремонт стиральных машин"
                    />
                    <link rel="icon" href="/favicon.svg" />
                    <meta
                        name="description"
                        content="Ремонт стиральных машин на дому в Твери."
                    />
                    <meta
                        name="keywords"
                        content="Установка и подключение, Покупка б/у машины, Замена ТЭНа, Ремонт модуля управления, Замена замка дверцы, Замена насоса, Замена подшипников"
                    />
                    <meta property="og:image" content="/thumbnail.jpg" />
                </Head>
                <Component {...pageProps} />
                <MobileButtons />
                <Popup />
            </ServicesContext.Provider>
        </ToglePopup.Provider>
    );
}

export default MyApp;
