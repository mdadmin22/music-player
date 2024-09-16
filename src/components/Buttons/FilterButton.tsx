import styles from "./FilterButton.module.css"

type Props = { 
    text: string;
}

function FilterButton (props : Props) {
    return (
        <button className={styles.button_container}>
            {props.text}
        </button>
    )
}
 
export default FilterButton; 