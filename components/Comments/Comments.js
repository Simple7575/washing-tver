import styles from "../../styles/Comments.module.scss";
import Comment from "./Comment.js";
import { content } from "./comentContent.js";

export default function Comments() {
    return (
        <div id="comments" className={styles.container}>
            <div className={styles.inner_container}>
                <h3>Отзывы</h3>
                <div className={styles.cards_wrapper}>
                    {content.map((item) => {
                        return <Comment key={Math.random()} body={item} />;
                    })}
                </div>
            </div>
        </div>
    );
}
