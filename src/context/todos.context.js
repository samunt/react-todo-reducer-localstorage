import React, {createContext} from 'react';
import {useLocalStorageReducer} from "../hooks/useLocalStorageReducer";
import todoReducer from "../reducers/todo.reducer"
const defaultTodos = [
    {id: 1, task: "mow the law", completed: false},
    {id: 2, task: "jump in the lake", completed: true}
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer)
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
            {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}
