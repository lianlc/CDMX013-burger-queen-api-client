import { useState } from "react"
import { RouterProvider } from "react-router-dom"
import { Link } from "react-router-dom"
import { RouteAuth } from "./routes/authRoutes/Auth"
import { NoAuthR } from "./routes/noAuthRoutes/noAuth"

export const Users = ()=>{


    const [user, setuser] = useState(false)



     const active =()=>{
        setuser(!user)
     } 
    
     return (
        <>
          {user ?
            <RouterProvider router={RouteAuth} />:<RouterProvider router={NoAuthR} />}
            <button onClick={active}>{!user ? "entrar" : "salir"}</button>
           
        </>
      );
}