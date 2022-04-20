import Link from "next/dist/client/link";
import styles from "../styles/Hero.module.scss";

export default function Nav({ navState }) {
    return (
        <>
            <nav className={navState ? styles.open : " "}>
                <ul>
                    <li>
                        <Link href="/">Главная</Link>
                    </li>
                    <li>
                        <a href="#services">Услуги</a>
                    </li>
                    <li>
                        <Link href="/price">Цены</Link>
                    </li>
                    <li>
                        <a href="#howWeWork">Принцип и график работы</a>
                    </li>
                    <li>
                        <a href="#comments">Отзывы</a>
                    </li>
                    <li>
                        <a href="#contacts">Контакты</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
