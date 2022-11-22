import { createBrowserRouter } from 'react-router-dom';
import {WaiterMainView} from './waiter/AllOrders';

export const RouteAuth = createBrowserRouter([
    {
        path: '/',
        element: < WaiterMainView/>,
    }
])