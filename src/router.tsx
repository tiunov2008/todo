import { TodoListPage } from './pages/TodoListPage';
import { createBrowserRouter } from 'react-router-dom';
import { ViewList } from './pages/ViewList';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './layout/Layout';
import { ToDo } from './models/toDoItem';

const todos : ToDo[] = [
    {
        id: 0,
        text: 'Действие',
        isDone: false
    },
    {
        id: 1,
        text: 'Действие',
        isDone: true
    },
    {
        id: 2,
        text: 'Действие',
        isDone: false
    },
    {
        id: 3,
        text: 'Действие',
        isDone: true
    },
]
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <TodoListPage />
            },
            {
                path: '/list/',
                element: <ViewList todos={todos} />,
            },
            {
                path: '/list/:id',
                element: <ItemDescription todos={todos} />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])