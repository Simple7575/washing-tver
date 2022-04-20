import styles from "../styles/Price.module.scss";
import Footer from "../components/Footer.js";
import Card from "../components/Price/Card";
import { pricelist } from "../components/Price/pricelist.js";
import Link from "next/dist/client/link";
import ViberSVG from "../components/Hero/svg/ViberSVG.js";
import PhoneSVG from "../components/Hero/svg/PhoneSVG";

export default function price() {
    return (
        <div className={styles.container}>
            <div className={styles.inner_container}>
                <div className={styles.nav_wrapper}>
                    <div className={styles.nav_container}>
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/">Главная</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.contacts}>
                        <a href="">
                            <ViberSVG />
                        </a>
                        <a href="">
                            <PhoneSVG />
                            <span>+7 (904) 002 09 14</span>
                        </a>
                    </div>
                </div>
                <div className={styles.attention}>
                    <p>
                        <strong>ВНИМАНИЕ!</strong> Данные цены приведены только
                        для понимания ориентировочной стоимости ремонта.
                        Окончательная цена ремонта будет названа мастером после
                        проведения полной диагностики вашей стиральной машины.
                    </p>
                </div>
                <div className={styles.price_content}>
                    {pricelist.map((item) => {
                        return <Card key={Math.random()} list={item} />;
                    })}
                </div>
                <Footer />
            </div>
        </div>
    );
}
