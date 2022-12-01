import './App.css';
import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import { RouteAuth } from './routes/authRoutes/Auth';
import { NoAuthR } from './routes/noAuthRoutes/noAuth';
import{Users} from './User'

function App() {
  return (
    <Users />
    )
}

export default App;
