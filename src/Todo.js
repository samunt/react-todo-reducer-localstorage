import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Checkbox  from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggleState from './hooks/useToggleState';
import EditTodoForm from "./EditTodoForm";
export default function Todo({task, completed, remove, toggleTodo, id, editTodo}) {
    const [isEditing, toggle] = useToggleState(false);
    return (
        <ListItem style={{height: '64px'}}>
            {isEditing ? (
                <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/>
                ) : (
               <>
                <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="icon">
                {/*remove is passed from todolist which is a function passed*/}
                {/*as a prop from todoapp called removeTodo passed as prop "remove()"*/}
                    <DeleteIcon onClick={() => remove(id)}/>
                </IconButton>
                <IconButton aria-label="icon" onClick={toggle}>
                    <EditIcon/>
                </IconButton>
            </ListItemSecondaryAction>
            </>
                )}
        </ListItem>
    )
}
