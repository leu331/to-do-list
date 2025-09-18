import styles from "./styles.module.css"

import addTask from "../../assets/addTask.svg"
import clockCounter from "../../assets/clock-counter-clockwise.svg"
import { Tasks } from "../Tasks/Tasks";

import { v4 as uuidv4 } from 'uuid';
import { FormEvent, useContext, useState } from "react";
import { Link } from "react-router";
import { TasksContext } from "../../Context/tasksContext";


export function TaskForm (){
  const {tasks, handleAddTask, history, setNewTask, newTask, handleToggleComplete, handleDeleteTask} = useContext(TasksContext)


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

            <div>
               <div className={styles.history}>
                <Link to={"/history"}>  
                  <button type="submit">
                    <p>Meu Histórico</p>
                    <img src={clockCounter} alt="" />
                  </button>
                </Link>
              
            </div>

            </div>

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