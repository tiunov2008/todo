import { Link } from "react-router-dom"
import { ToDo } from "../../models/toDoItem"
import classes from './ViewListItem.module.scss'
export const ViewListItem = ({ todo }: {todo : ToDo}) => {
    return (
        <Link className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`} to={`/list/${todo.id}`}>{todo.text}</Link>
    )
}