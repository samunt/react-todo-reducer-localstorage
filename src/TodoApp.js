import React, {useEffect} from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {TodosProvider} from "./context/todos.context";

export default function TodoApp() {
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}>
            <AppBar color='primary' position='static' style={{height: "64px"}}>
               <Toolbar>
                   <Typography color='inherit'>Todos with hooks</Typography>
               </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
            {/*  addTodo is a functoin defined above thats passed to the form */}
            {/* it receives an value from useInputState on the todoform component*/}
            {/* that value is the text of the new todo*/}
                    <TodosProvider>
                        <TodoForm/>
                        <TodoList/>
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}

// -todo app (manages state)
//   -todoform
//   -todolist
//     -todoItem
