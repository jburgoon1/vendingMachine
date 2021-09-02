import React from 'react'
import {BrowserRouter, NavLink, Route} from 'react-router-dom'

const Soda = () =>{
    return (
        <>
        <h1>YUMMMMMM SODA</h1>
        <nav>
            <NavLink exact to='/'>Go Back</NavLink>
           
        </nav>
        </>
    )
}
export default Soda;