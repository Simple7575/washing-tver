import styles from "../../styles/Comments.module.scss";
import Comment from "./Comment.js";
import { content } from "./comentContent.js";
import { ServicesContext } from "../../pages/_app.js";
import { useContext, useState } from "react";

import LeftArrow from "../Services/svg/LeftArrow.js";
import RightArrow from "../Services/svg/RightArrow.js";

export default function Comments() {
    const { serviceClassname } = useContext(ServicesContext);
    const [currentCard, setCurrentCard] = useState(0);

    const nextCard = (e) => {
        const query = window.matchMedia("(min-width: 480px)");
        setCurrentCard(currentCard < 2 ? currentCard + 1 : 0);
    };

    const prevCard = (r) => {
        const query = window.matchMedia("(min-width: 480px)");
        setCurrentCard(currentCard > 0 ? currentCard - 1 : currentCard);
    };

    return (
        <div id="comments" className={styles.container}>
            <div className={styles.inner_container}>
                <h3>Отзывы</h3>
                <div
                    className={`${styles.cards_wrapper} ${styles[serviceClassname]}`}
                >
                    {content.map((item) => {
                        return (
                            <Comment
                                currentCard={currentCard}
                                key={Math.random()}
                                body={item}
                            />
                        );
                    })}
                </div>
                <div
                    className={`${styles.arrow} ${styles.left}`}
                    onClick={prevCard}
                >
                    <LeftArrow />
                </div>
                <div
                    className={`${styles.arrow} ${styles.right}`}
                    onClick={nextCard}
                >
                    <RightArrow />
                </div>
            </div>
        </div>
    );
}
