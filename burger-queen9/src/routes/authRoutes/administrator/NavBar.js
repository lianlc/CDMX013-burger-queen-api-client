import { Link } from "react-router-dom"

export const NavBar = () => {
    return (<nav>
        <ul>
            <li> <Link to="/users">User</Link></li>
            <li><Link to="/administrator">Menu</Link></li>
        </ul>
    </nav>)
    // const onLogout = () => {
    //     console.log("fuera")
    // }
    // return (
    //     <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
    //         <div className="navbar-collapse">
    //         <ul className="navbar-nav ml-auto">
    //                 <span className='nav-item nav-link'>
    //                     Ordenes
    //                 </span>
    //                 <span className='nav-item nav-link'>
    //                     Pedido
    //                 </span>
    //             </ul>
    //         </div>
    //         <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
    //             <ul className="navbar-nav ml-auto">
    //                 <span className='nav-item nav-link text-primary'>
    //                     Janeth
    //                 </span>
    //                 <button
    //                     className='nav-item nav-link btn'
    //                     onClick={onLogout}
    //                 >
    //                     Logout
    //                 </button>
    //             </ul>
    //         </div>
    //     </nav>
    // )
}