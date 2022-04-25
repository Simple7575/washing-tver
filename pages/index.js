import React from "react";
import Comments from "../components/Comments/Comments.js";
import Contacts from "../components/Contacts/Contacts.js";
import Footer from "../components/Footer.js";
import Hero from "../components/Hero/Hero";
import HowWeWork from "../components/HowWeWork";
import Services from "../components/Services/Services";
import ShallowInfo from "../components/ShallowInfo";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        // <!-- Yandex.Metrika counter -->

        (function (m, e, t, r, i, k, a) {
            m[i] =
                m[i] ||
                function () {
                    (m[i].a = m[i].a || []).push(arguments);
                };
            m[i].l = 1 * new Date();
            (k = e.createElement(t)),
                (a = e.getElementsByTagName(t)[0]),
                (k.async = 1),
                (k.src = r),
                a.parentNode.insertBefore(k, a);
        })(
            window,
            document,
            "script",
            "https://mc.yandex.ru/metrika/tag.js",
            "ym"
        );

        ym(88522752, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
        });

        // <!-- /Yandex.Metrika counter -->
    }, []);

    return (
        <div>
            <div>
                <img
                    src="https://mc.yandex.ru/watch/88522752"
                    style={{ position: "absolute", left: "-9999px" }}
                    alt=""
                />
            </div>
            <Hero />
            <main>
                <ShallowInfo />
                <Services />
                <HowWeWork />
                <Comments />
                <Contacts />
                <Footer />
            </main>
        </div>
    );
}
