import styles from "../../styles/Services.module.scss";
import Cards from "./Cards";
import { content } from "./cardContent.js";
import LeftArrow from "./svg/LeftArrow.js";
import RightArrow from "./svg/RightArrow.js";
import { ServicesContext } from "../../pages/_app.js";
import { useContext, useEffect, useState } from "react";

export default function Services() {
    const { serviceClassname } = useContext(ServicesContext);
    const [currentCard, setCurrentCard] = useState(0);
    let count = 1;

    const nextCard = (e) => {
        const query = window.matchMedia("(min-width: 480px)");
        if (!query.matches) {
            setCurrentCard(currentCard < 4 ? currentCard + 1 : 0);
        } else {
            const cards = window.document.querySelectorAll("#card_container");
            cards.forEach((card) => {
                card.setAttribute(
                    "style",
                    `transform: translateX(-${560 * count}px)`
                );
            });
            count = count > 1 ? 0 : count + 1;
            console.log(count);
        }
    };

    const prevCard = (r) => {
        const query = window.matchMedia("(min-width: 480px)");
        if (!query.matches) {
            setCurrentCard(currentCard > 0 ? currentCard - 1 : currentCard);
        } else {
            const cards = window.document.querySelectorAll("#card_container");
            cards.forEach((card) => {
                card.setAttribute(
                    "style",
                    `transform: translateX(${560 * count}px)`
                );
            });
            count = count === 1 ? count : count - 1;
            console.log(count);
        }
    };

    useEffect(() => {}, []);

    return (
        <div id="services" className={styles.container}>
            <div className={styles.inner_container}>
                <h3>Наши услуги</h3>
                <div
                    className={`${styles.cards_wrapper} ${styles[serviceClassname]}`}
                >
                    {content.map((item) => {
                        return (
                            <Cards
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
