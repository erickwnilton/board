import SubSection from "./subSection";
import styles from "../styles/line.module.css";

export default function Line(props) {
    return (
        <div className={styles.line}>
            <SubSection color={props.color} />
            <SubSection color={!props.color} />
            <SubSection color={props.color} />
            <SubSection color={!props.color} />
            <SubSection color={props.color} />
            <SubSection color={!props.color} />
            <SubSection color={props.color} />
            <SubSection color={!props.color} />
        </div>
    )
}