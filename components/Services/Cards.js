import styles from "../../styles/Services.module.scss";
import Link from "next/link";
import { ToglePopup } from "../../pages/_app.js";
import { useContext, useState, useEffect } from "react";

export default function Cards({ body, currentCard }) {
    const { setPopupState } = useContext(ToglePopup);

    useEffect(() => {
        const cards = document.querySelectorAll("#card_container");
        cards[currentCard]?.classList.add(`${styles.show}`);
    }, [currentCard]);

    return (
        <div className={`${styles.card_container}`} id="card_container">
            <strong>{body.strong}</strong>
            <p>{body.p1}</p>
            <p>{body.p2}</p>
            <p>{body.p3}</p>
            {body.b === "Связаться с нами" ? (
                <button onClick={() => setPopupState(null)}>{body.b}</button>
            ) : (
                <Link href="/price">{body.b}</Link>
            )}
        </div>
    );
}
