import styles from "../../styles/Price.module.scss";

export default function Card({ list }) {
    return (
        <div className={styles.card_container}>
            <p>
                <strong>{list.title}</strong>
                {"  "} {list.price}
            </p>
            <div>
                {list.body.map((item) => {
                    return <p key={Math.random()}>{item}</p>;
                })}
            </div>
        </div>
    );
}
