import styles from "../../styles/Comments.module.scss";
import { useEffect } from "react";

export default function Comment({ body, currentCard }) {
    useEffect(() => {
        const cards = document.querySelectorAll("#comment_container");
        cards[currentCard]?.classList.add(`${styles.show}`);
    }, [currentCard]);

    return (
        <div className={styles.card_container} id="comment_container">
            <div className={styles.card_img_container}>{body.photo}</div>
            <strong>{body.name}</strong>
            <p>{body.body}</p>
        </div>
    );
}
