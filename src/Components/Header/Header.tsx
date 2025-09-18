import styles from "./styles.module.css"
import rocket from "../../assets/rocket.svg"
import { Link } from "react-router";
import clockCounter from "../../assets/clock-counter-clockwise.svg"

export function Header(){
    return (
       <header className={styles.header}>
        <div className={styles.headerContent}>
          <img src={rocket} alt="" />
          <div className={styles.text}><span>to</span><span>do</span></div>
        </div>
      </header>
    )
}