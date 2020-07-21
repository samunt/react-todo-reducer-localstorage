import React, {useContext} from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from './hooks/useInputState';
import {DispatchContext} from "./context/todos.context";

export default function TodoForm() {
    //we created a useinput state function which returns a state, and 2 functions
    const [value, handleChange, reset] = useInputState("");
    const dispatch = useContext(DispatchContext)
    return (
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form onSubmit={(e) => {
                e.preventDefault();
                // addTodo is a function passed from todoapp.js
                // value is the state returned from the useInputState hook
                dispatch({type: "ADD", task: value})
                // reset is a hook from useInputState
                reset();
            }}>
                {/*handleChange is from the useInputState hook*/}
                <TextField value={value} onChange={handleChange} margin="normal" label='New Todo' fullWidth/>
            </form>
        </Paper>
    )
}
