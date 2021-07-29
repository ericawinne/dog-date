import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    
    return (
        <nav>
            <NavLink to="/DogDates">DogDates</NavLink>
            <NavLink to="/NewDogProfile">NewDogProfile</NavLink>
            <NavLink exact to="/">DogFinder</NavLink>
        </nav>
    )
}

export default NavBar