import { Link } from "react-router-dom"

export const WaiterMainView = ()=>{
    return (
        <div>Hola prueba
            <button><Link to="/neworder">Agregar orden</Link></button>
            <button><Link to="/chef">Chef</Link></button>
        </div>
        
    )
}