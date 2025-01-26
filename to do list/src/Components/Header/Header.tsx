import styles from "./styles.module.css"
import rocket from "../../assets/rocket.svg"

export function Header(){
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img src={rocket} alt="" />
                <div className={styles.text}><span>to</span><span>do</span></div>
            </header>
        </div>
    )
}