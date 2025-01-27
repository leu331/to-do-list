import styles from "./styles.module.css"
import trashIcon from "../../assets/trash.svg"
import { TaskProps } from "../Header Task/HeaderTask"

export function Tasks ({title, id, isComplete, onToggleComplete, handleDeleteTask}: TaskProps){

    function handleCheckboxChange() {
        if (onToggleComplete) {
            onToggleComplete(id); // Passar o id da tarefa para a função
        }
      }

    function onDeleteTask () {
        if(handleDeleteTask){
            handleDeleteTask(id)
        }
    }
        
    return (
        <div className={`${styles.task} ${isComplete ? styles.completed :  ""}`}>
                <input className={styles.check} type="checkbox" checked={isComplete} onChange={handleCheckboxChange}/>
                <h2>{title}</h2>
                <button type="button" onClick={onDeleteTask}>
                    <img src={trashIcon} alt="" />
                </button>
            </div>
    )
}