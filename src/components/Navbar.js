import React from 'react'
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div >
       
  
   <nav>
      <ul className="navbar-nav flex justify-end mx-auto mb-2 mb-lg-0">
        <li className="nav-item pr-5">
          <NavLink className="nav-link active"  to="/">Home</NavLink>
        </li>
        <li className="nav-item pr-5">
          <NavLink className="nav-link" to="/employee">Employees</NavLink>
        </li>
        <li className="nav-item pr-5">
          <NavLink className="nav-link" to="/user">users</NavLink>
        </li>
        
       
      </ul>
      
   
  
</nav>
      
    </div>
  )
}

export default Navbar
