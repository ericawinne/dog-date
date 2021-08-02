import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/DogFinder">DogFinder</NavLink>
            <NavLink to="/DogDates">DogDates</NavLink>
            <NavLink to="/NewDogProfile">NewDogProfile</NavLink>
        </nav>
  )
}

export default NavBar
