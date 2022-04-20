import styles from "../styles/HowWeWor.module.scss";

export default function HowWeWork() {
    return (
        <div id="howWeWork" className={styles.container}>
            <div className={styles.inner_container}>
                <h3>Как мы работаем</h3>
                <div className={styles.first_column}>
                    <div>
                        <img
                            className={styles.face}
                            src="./howWeWorkSVG/face.svg"
                            alt="svg"
                        />
                        <p>
                            Принимаем вашу заявку по телефону, WhatsApp или
                            Telegram. Договариваемся о дне и времени нашего
                            приезда.
                        </p>
                    </div>
                    <div>
                        <img src="./howWeWorkSVG/binocle.svg" alt="svg" />
                        <p>
                            Проводим диагностику вашей стиральной машины у вас
                            на дому, обсуждаем сроки выполнения работы и цену
                            ремонта.
                        </p>
                    </div>
                    <div>
                        <img src="./howWeWorkSVG/wranch.svg" alt="svg" />
                        <p>
                            Ремонтируем вашу машинку или заказываем запчасти к
                            ней (при нестандартной поломке). Выдаем гарантию на
                            выполненную работу.
                        </p>
                    </div>
                </div>
                <div className={styles.second_column}>
                    <div>
                        <strong>Рабочее время</strong>
                        <p>
                            С понедельника по пятницу с 11 до 19.00 по
                            предварительной записи (<a href="">телефон</a>,
                            <a href="">WhatsApp</a>, <a href="">Telegram</a>)
                        </p>
                    </div>
                    <div>
                        <strong>Обслуживаем города:</strong>
                        <p>
                            Нелидово, Белый, Западная Двина, г.п. Оленино и
                            окрестные населенные пункты.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
