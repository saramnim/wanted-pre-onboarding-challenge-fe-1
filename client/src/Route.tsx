import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import TodoList from './components/TodoList/TodoList';

export const ROUTE = {
    HOME: {
        path: '/',
        link: '/',
        element: TodoList,
    },
    LOGIN: {
        path: '/login',
        link: '/login',
        element: Login,
    },
    SignUp: {
        path: '/signup',
        link: '/signup',
        element: SignUp,
    },
};

export const ROUTE_ARR = Object.values(ROUTE);