import styles from "../styles/subSection.module.css";

export default function SubSection(props) {
    return (
        <div
            style={{ backgroundColor: props.color ? "#000" : "#fff" }}
            className={styles.subSection}>
        </div>
    )
}