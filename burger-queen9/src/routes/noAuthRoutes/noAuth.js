import {LoginUser} from './Login';
import { createBrowserRouter } from 'react-router-dom';

export const NoAuthR = createBrowserRouter([
    {path:'/',
    element: <LoginUser />,
    }
])