import React from "react";
import styles from "../styles/ShallowInfo.module.scss";

export default function ShallowInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.inner_container}>
                <div>
                    <img src="./secondSVG/house.svg" alt="svg" />
                    <strong>Удобно </strong>
                    Не нужно искать сервисный центр — мы сами приедем к вам.
                </div>
                <div>
                    <img src="./secondSVG/plus.svg" alt="svg" />
                    <strong>Скидки</strong>
                    При обширном ремонте действует скидка на общую сумму.
                </div>
                <div>
                    <img src="./secondSVG/success.svg" alt="svg" />
                    <strong> Гарантия</strong>
                    Мы выдаем гарантийный талон сроком действия до года.
                </div>
            </div>
        </div>
    );
}
