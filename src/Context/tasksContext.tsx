import { FormEvent, ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

interface TasksContextProviderProps {
    children: ReactNode;
}

export interface TasksProps {
    id: string;
    title: string;
    isComplete: boolean;
}

interface TasksContextType {
    tasks: TasksProps[];
    history: TasksProps[];
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    handleAddTask: (event: FormEvent) => void;
    handleToggleComplete: (taskId: string) => void;
    handleDeleteTask: (taskId: string) => void;
}

export const TasksContext = createContext<TasksContextType>({} as TasksContextType);

function TasksProvider({ children }: TasksContextProviderProps) {
    const storageKey = "history";

    const [tasks, setTasks] = useState<TasksProps[]>([]);
    const [history, setHistory] = useState<TasksProps[]>(() => {
        const saved = localStorage.getItem(storageKey);
        return saved ? JSON.parse(saved) : [];
    });

    const [newTask, setNewTask] = useState("");

    function handleAddTask(event: FormEvent) {
        event.preventDefault();

        if (!newTask.trim()) {
            alert("A nova tarefa não pode estar vazia");
            return;
        }

        const newTaskObj: TasksProps = {
            id: uuidv4(),
            title: newTask,
            isComplete: false,
        };

        setTasks(prev => [...prev, newTaskObj]);
        setHistory(prev => [...prev, newTaskObj]); // adiciona ao histórico
        setNewTask("");
    }

    function handleToggleComplete(taskId: string) {
        setTasks(prev =>
            prev.map(task =>
                task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
            )
        );
        setHistory(prev =>
            prev.map(task =>
                task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
            )
        );
    }

    function handleDeleteTask(taskId: string) {
        setTasks(prev => prev.filter(task => task.id !== taskId));
        // NÃO remove do histórico
    }

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(history));
    }, [history]);

    return (
        <TasksContext.Provider
            value={{
                tasks,
                history,
                newTask,
                setNewTask,
                handleAddTask,
                handleToggleComplete,
                handleDeleteTask,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
}

export default TasksProvider;
