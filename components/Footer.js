import styles from "../styles/Footer.module.scss";
import ViberSVG from "./Hero/svg/ViberSVG.js";
import WhatsappSVG from "./Hero/svg/WhatsappSVG.js";
import PhoneSVG from "./Hero/svg/PhoneSVG";

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.inner_container}>
                <div>
                    <p className={styles.name}>Александр Иосифович</p>
                    <p className={styles.inn}>ИНН: 691507632531</p>
                    <p>SERVISTVER.RU</p>
                    <p>2022 &copy;</p>
                </div>
                <div className={styles.contacts}>
                    <a href="tel:+79520669090">
                        <ViberSVG />
                    </a>
                    <a href="tel:+79520669090">
                        <PhoneSVG />
                        <span>+7 (952) 066 90 90 </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
