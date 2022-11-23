import { Link } from "react-router-dom"

export const WaiterNewOrderView = ()=>{
    return (
        <div>Confirmar orden
            <button><Link to="/waiter">Agregar orden</Link></button>
        </div>
        
    )
}