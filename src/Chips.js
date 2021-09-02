import React from 'react'
import {BrowserRouter, NavLink, Route} from 'react-router-dom'

const Chips = () =>{
    return (
        <>
        <h1>YUMMMMMM Chips</h1>
        <nav>
            <NavLink exact to='/'>Go Back</NavLink>
           
        </nav>
        </>
    )
}
export default Chips;