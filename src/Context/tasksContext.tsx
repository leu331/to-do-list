import { ReactNode, useState } from "react";
import { createContext } from "react";

interface TasksContextProviderProps {
    children: ReactNode
}

interface TasksProps {
    id: string;
    title: string;
    isComplete: boolean
}

interface TasksContextType {
    tasks: TasksProps[];
    updateTask: (taskId: string) => void
}

export const TasksContext = createContext<TasksContextType>({} as TasksContextType)

function TasksProvider({children}: TasksContextProviderProps) {
    const [tasks, setTasks] = useState<TasksProps[]>([])

        function updateTaskComplete(taskId: string) {
            setTasks(prev =>
                prev.map(task =>
                    task.id === taskId ? {...task, isComplete: !task.isComplete} : task
                )
            )
        }   

        function updateTaskTitle(taskId: string, newTitle: string) {
            setTasks(prev => 
                prev.map(task =>
                    task.id === taskId ? {...task, title: newTitle} : task
                )
            )
        }
    
    return (
        <TasksContext.Provider value={{tasks, updateTask(taskId) {
            
        },}}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksProvider

