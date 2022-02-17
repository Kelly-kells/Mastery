import React from 'react'
import { Outlet, Link } from "react-router-dom";




function Navbar() {
    return (
        <section>
        <nav>
        <ul>
          <li>
            <Link to="/" activeClassName='active'>Home</Link>
          </li>
          <li>
            <Link to="/About" activeClassName='active'>About</Link>
          </li>
          <li>
            <Link to="/Pricing"  activeClassName='active'>Pricing</Link>
          </li>
        </ul>
      </nav>

      <Outlet />    
        </section>
    )
}



export default Navbar
