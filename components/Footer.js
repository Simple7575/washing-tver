import styles from "../styles/Footer.module.scss";
import ViberSVG from "./Hero/svg/ViberSVG.js";
import WhatsappSVG from "./Hero/svg/WhatsappSVG.js";
import PhoneSVG from "./Hero/svg/PhoneSVG";

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.inner_container}>
                <div>
                    <p>STIRPRO.RU</p>
                    <p>2022 &copy;</p>
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
        </div>
    );
}
