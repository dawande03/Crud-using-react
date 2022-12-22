import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (    

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className='container'>
                <ul className="navbar-nav">
                    <NavLink to="/" className="navbar-brand">React website</NavLink>
                    <li lassName="nav-item active">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                </ul>
                <div>
                <Link className='btn btn-info' to="/adduser">Add user</Link>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
