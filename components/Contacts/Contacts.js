import styles from "../../styles/Contacts.module.scss";

export default function Contacts() {
    return (
        <div id="contacts" className={styles.container}>
            <div className={styles.inner_container}>
                <h3>Контакты</h3>
                <div>
                    <ul>
                        <li>
                            <a href="">Телефон: +7 952 066 90 90</a>
                        </li>
                        <li>
                            <a href="">Доп. т.: +7 910 695 15 12</a>
                        </li>
                        <li>
                            <a href="">Viber: +7 963 219 35 36</a>
                        </li>
                    </ul>

                    <p>
                        <strong>Работаем:</strong> <br />С понедельника по
                        пятницу с 11 до 19.00 по предварительной записи
                    </p>
                    <p>
                        <strong>Обслуживаем в Тверской области:</strong> <br />
                        Нелидово, Белый, Западную Двину, г.п. Оленино и
                        окрестные населенные пункты.
                    </p>
                </div>
                <div className={styles.map_container}>
                    <iframe
                        className={styles.map}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2218.032803488808!2d32.769521815532144!3d56.225669862889866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c8611fcc7c0d93%3A0x8d75a4e224b05ab0!2z0YPQuy4g0JzQsNGC0YDQvtGB0L7QstCwLCAxNC0xNiwg0J3QtdC70LjQtNC-0LLQviwg0KLQstC10YDRgdC60LDRjyDQvtCx0Lsu!5e0!3m2!1sru!2sru!4v1640969267694!5m2!1sru!2sru"
                        loading="lazy"
                        title="Iframe Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
