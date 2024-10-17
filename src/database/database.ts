import { ITodo } from "../interfaces/todo.interface";

let id = 0;

export let todoDatabase: ITodo[] = [];

export const resetDatabase = () => {
    todoDatabase = [];
}

export const generateId = () => {
    id++;
    return id;
}