import { useContext } from "react"
import { Tasks } from "../../Components/Tasks/Tasks"
import styles from "./styles.module.css"
import { TasksContext } from "../../Context/tasksContext"
import { Link } from "react-router"
import arrowLeft from "../../assets/arrow-u-up-left.svg"
import { jsxs } from "react/jsx-runtime"

export default function History () {
    const {tasks, handleToggleComplete, handleDeleteTask} = useContext(TasksContext)
    const tasksOnHistory = JSON.parse(localStorage.getItem("history") || "[]")
    return (
        <div className={styles.container}>
            <div className={styles.link}>
                <Link to={"/"}>
                    <button>
                        Início
                        <img src={arrowLeft} alt="" />
                    </button>
                </Link>
            </div>
           
            <header className={styles.header}>
                <h1>
                    Histórico de Tarefas
                </h1>
            </header>
            <div className={styles.history}>
                {tasksOnHistory.length > 0 ? (
                    tasksOnHistory.map((task: any) => (
                        <div className={styles.taskHistory}>
                            <Tasks 
                            key={task.id} 
                            id={task.id} 
                            isComplete={task.isComplete} 
                            title={task.title} 
                            isHistory={true} 
                            onToggleComplete={handleToggleComplete}/>
                        </div>
                   
                ))   
                ) : (
                    <div> 
                        <p>Não há tarefas no histórico para serem exibidas.</p>
                    </div>
                )}
               
            </div>
        </div>
    )
}