import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg py-2 fixed-top">
        <div className="container">
            <Link className="navbar-brand fw-bolder text-white" to={"/home"}>Start Framework</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link fw-medium fs-5" to={"/about"}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fw-medium fs-5" to={"/portfolio"}>Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link fw-medium fs-5" to={"/contact"}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar