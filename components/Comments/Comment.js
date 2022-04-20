import styles from "../../styles/Comments.module.scss";

export default function Comment({ body }) {
    return (
        <div className={styles.card_container}>
            <div className={styles.card_img_container}>{body.photo}</div>
            <strong>{body.name}</strong>
            <p>{body.body}</p>
        </div>
    );
}
