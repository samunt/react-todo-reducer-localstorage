import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from "./Todo";

export default function TodoList({todos, remove, toggleTodo, editTodo}) {
    if (todos.length)
        return (
        <Paper>
            <List>
            {todos.map((todo, index) => (
                <>
                    {/*we created a todo component and are passing props to it*/}
                    {/*the remove prop is a function from the todoapp parent*/}
                    {/*we are actually passing remove function down one more to todo.js*/}
                    <Todo
                        id={todo.id}
                        task={todo.task}
                        key={todo.id}
                        completed={todo.completed}
                        remove={remove}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                    { index < todos.length - 1 ? <Divider/>:""}
                </>
            ))}
            </List>
        </Paper>
    )
    return null
}
