import { Link } from "react-router"
import styles from "./styles.module.css"
import arrowLeft from "../../assets/arrow-u-up-left.svg"

export function NotFound () {
    return (
        <div className={styles.container}>
            <h1>Desculpe, esta página não existe ou foi excluída!</h1>
            <p>Volte para a Home através do botão abaixo</p>
            <Link to={"/"}>
                <button>
                    <span>Início</span>
                    <img src={arrowLeft} alt="" />
                </button>
            </Link>
        </div>
    )
}