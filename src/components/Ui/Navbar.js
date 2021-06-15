import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-navbar-color">
            <div className="container">
                <Link to="/" className="navbar-brand text-white">
                    Student List
                </Link>
                <div>
                    <Link to="/addform" className="btn btn-light ml-auto" style={{color:"#fff"}}>
                    <span class="fas fa-user-plus"></span>Add
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
