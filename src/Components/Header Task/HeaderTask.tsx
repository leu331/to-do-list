import styles from "./styles.module.css"

import addTask from "../../assets/addTask.svg"
import { Tasks } from "../Tasks/Tasks";

import { v4 as uuidv4 } from 'uuid';
import { FormEvent, useState } from "react";

 export interface TaskProps {
    id: string
    title: string
    isComplete: boolean
    onToggleComplete?:(id: string) => void 
    handleDeleteTask?:(id: string) => void
  }

export function HeaderTasks (){
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTask, setNewTask] = useState("")

  function handleAddTask(event: FormEvent){
    event.preventDefault()

    if(!newTask.trim()){
      alert("A nova tarefa não pode estar vazia")
      return
    }
    const newTaskObj = {
        id: uuidv4(),
        title: newTask,
        isComplete: false
      }
       setTasks([...tasks, newTaskObj])
      setNewTask("")

  }

  function handleToggleComplete(id: string){
    const updatedTasks = tasks.map(task =>
      task.id === id ? {...task, isComplete: !task.isComplete} : task
    )

    setTasks(updatedTasks)
  }

  function handleDeleteTask(id: string){
    const updatedTasks = tasks.filter(task => task.id !== id )
    setTasks(updatedTasks)
  }

  const completedTasks = tasks.filter(task => task.isComplete)

    return (
        <div className={styles.container}>
            <form className={styles.form} action="" onSubmit={handleAddTask}>
                <input 
                id="input"
                type="text" 
                title="task" 
                value={newTask}
                placeholder="Adicione uma nova tarefa" 
                onChange={(event) => setNewTask (event.target.value)}
                />
                
                <button type="submit">
                    <p>Criar</p>
                    <img src={addTask} alt="" />
                </button>
            </form>

            <div className={styles.taskStatus}>
                <div className={styles.createdTasks}>
                    <h4>Tarefas criadas</h4>
                    <span> {tasks.length} </span>
                </div>

                <div className={styles.completedTasks}>
                    <h4>Tarefas Concluidas</h4>
                    <span> {completedTasks.length} de {tasks.length}</span> 
                </div>
            </div>

            {tasks.map((task) => {
              return (
                <Tasks
                key={task.id}
                id={task.id}
                title={task.title}
                isComplete={task.isComplete}
                onToggleComplete={handleToggleComplete}
                handleDeleteTask={handleDeleteTask}/>
              )
            })}            
        </div>
    )
}