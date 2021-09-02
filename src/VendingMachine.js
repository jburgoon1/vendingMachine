import React from 'react'
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import './Navbar.css'
const VendingMachine = () =>{
    return (
        <nav className="navbar">
            <NavLink exact to='/chips'>Chips</NavLink>
            <NavLink exact to='/soda'>Soda</NavLink>
            <NavLink exact to='/sardines'>Sardines</NavLink>
        </nav>
    )
}
export default VendingMachine;