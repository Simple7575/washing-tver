import styles from "../../styles/Contacts.module.scss";

export default function Contacts() {
    return (
        <div id="contacts" className={styles.container}>
            <div className={styles.inner_container}>
                <h3>Контакты</h3>
                <div>
                    <ul>
                        <li>
                            <a href="tel:+79520669090">Телефон: +7 952 066 90 90</a>
                        </li>
                        <li>
                            <a href="tel:+79206951512">Доп. т.: +7 920 695 15 12</a>
                        </li>
                    </ul>

                    <p>
                        <strong>Работаем:</strong> <br />
                        Без выходных с 08:00 до 21:00 по предварительной записи
                    </p>
                    <p>
                        <strong>Обслуживаем:</strong> <br />
                        Тверь. Выезд в пригород.
                    </p>
                </div>
                <div className={styles.map_container}>
                    <iframe
                        className={styles.map}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139596.51183773534!2d35.74938637053547!3d56.8597423615051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b687ab1d6c94f3%3A0xf42b3a95f433bc9c!2z0KLQstC10YDRjCwg0KLQstC10YDRgdC60LDRjyDQvtCx0Lsu!5e0!3m2!1sru!2sru!4v1650548959188!5m2!1sru!2sru"
                        loading="lazy"
                        title="Iframe Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
