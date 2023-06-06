import { useState } from "react";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/toDoItem";
import { ViewListItem } from "../components/ViewListItem/ViewListItem";
export const ViewList = (props: {todos : ToDo[]}) =>  {
    return (
        <div className="container">
            {
                props.todos.map((todo : ToDo, idx : number) => {
                    return (<ViewListItem todo={todo} key={idx}/>)
                })
            }
        </div>
    )
}

    