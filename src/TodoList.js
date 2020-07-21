import React, {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from "./Todo";
import {TodosContext} from "./context/todos.context";

export default function TodoList() {
    const todos = useContext(TodosContext);
    if (todos.length)
        return (
        <Paper>
            <List>
            {todos.map((todo, index) => (
                <React.Fragment key={index}>
                    {/*we created a todo component and are passing props to it*/}
                    {/*the remove prop is a function from the todoapp parent*/}
                    {/*we are actually passing remove function down one more to todo.js*/}
                    <Todo
                        {...todo}
                        key={todo.id}
                    />
                    { index < todos.length - 1 ? <Divider/>:""}
                </React.Fragment>
            ))}
            </List>
        </Paper>
    )
    return null
}
