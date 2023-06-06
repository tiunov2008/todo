import { useState } from "react";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/toDoItem";
import { useDispatch, useSelector } from "react-redux";
export const TodoListPage = () =>  {
    const [todos, setTodos] = useState<ToDo[]>([])

    const createNewTodo = (text : string) => {
        const newTodo : ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos, newTodo])
    }
    const updateTodo = (toDoItem : ToDo) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === toDoItem.id){
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodos(newTodos)
    }
    const deleteTodo = (toDoItem : ToDo) => {
        const newTodos = todos.filter(todo => todo.id !== toDoItem.id)
        setTodos(newTodos)
    }
    return (
        <>
            <Form createNewTodo={createNewTodo}/>
            <ToDoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        </>
    );
}

