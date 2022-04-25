import Nav from "../Nav.js";
import styles from "../../styles/Hero.module.scss";
import { useState } from "react";

import TelegramSVG from "./svg/TelegramSVG.js";
import ViberSCG from "./svg/ViberSVG.js";
import PhoneSVG from "./svg/PhoneSVG.js";
import Hamburger from "../Hamburger.js";
import Close from "../Close.js";

import { ToglePopup } from "../../pages/_app.js";
import { useContext } from "react";

export default function Hero() {
    const [navState, setNavState] = useState(false);

    const { setPopupState } = useContext(ToglePopup);

    return (
        <div className={styles.container}>
            <div className={styles.inner_container}>
                <div className={styles.content}>
                    <div
                        className={
                            navState
                                ? `${styles.hamburger} ${styles.appear}`
                                : styles.hamburger
                        }
                        onClick={() => setNavState(!navState)}
                    >
                        {navState ? (
                            <Close navState={navState} />
                        ) : (
                            <Hamburger navState={navState} />
                        )}
                    </div>
                    <div className={styles.nav_container}>
                        <Nav navState={navState} />
                    </div>
                    <div className={styles.contacts}>
                        <a href="tel:+79520669090">
                            <PhoneSVG />
                            <span>+7 (952) 066 90 90</span>
                        </a>
                        <a href="tel:+79206951512">
                            <PhoneSVG />
                            <span>+7 (920) 695 15 12</span>
                        </a>
                        {/* <button>
                            <ViberSCG />
                            <span>&nbsp; +7 (963) 219 35 36</span>
                        </button> */}
                    </div>
                    <div className={styles.header}>
                        <h1>Ремонт стиральных машин на дому в Твери</h1>
                        <h3>
                            Пенсионерам, инвалидам и многодетным семьям скидка
                            10%! Продажа б/у машин. Работаем в пригороде.
                        </h3>
                        <h3>
                            Опыт работы более 10 лет! Гарантия до 12 месяцев!
                            Выезд в течения одного часа.
                        </h3>
                        <button onClick={() => setPopupState(null)}>
                            Связаться с нами
                        </button>
                    </div>
                </div>
                <div className={styles.img}>
                    <img src="./washingMachine.jpg" alt="washing machine" />
                </div>
            </div>
        </div>
    );
}
