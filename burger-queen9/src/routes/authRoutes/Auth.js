import { createBrowserRouter } from 'react-router-dom';
import { WaiterMainView } from './waiter/AllOrders';
import { AdminMainView } from './administrator/Menu';
import { ChefMainView } from './chef/Orders';
import { AdminUsersView } from './administrator/User';
import { WaiterNewOrderView } from './waiter/AddOrder';

export const RouteAuth = createBrowserRouter([
    {
        path: '/waiter',
        element: < WaiterMainView />,
    },
    {
        path: '/neworder',
        element: < WaiterNewOrderView />,
    }, {
        path: '/administrator',
        element: < AdminMainView />,
    }, {
        path: '/users',
        element: <AdminUsersView />
    }
    , {
        path: '/chef',
        element: < ChefMainView />,
    }
])