import { createContext,useContext } from "react";

export const TaskContext = createContext({
    tasks: [
        {
            id:1,
            task: "Task msg",
            checked: false,
        }
    ],
    addTask: (task) => {},
    updateTask: (id,task) => {},
    deleteTask: (id) => {},
    toggleChecked: (id) => {},
});

export const Taskprovider = TaskContext.Provider;

export const useTask = () => {
    return useContext(TaskContext); 
}