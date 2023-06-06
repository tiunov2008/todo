import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/toDoItem";
export const ToDoList = (props : {todos : ToDo[], updateTodo : Function, deleteTodo : Function}) => {
    const getList = (checked : boolean) => {
        return props.todos.map((item, idx)=>{
            if (item.isDone === checked) {
                return <ToDoListItem toDoItem={item} key={idx} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo}/>
            }
        })
    }


    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {getList(false)}
            </ul>
            <ul className="todo-list completed">
                {getList(true)}
            </ul>
        </div>
    )
}