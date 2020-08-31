import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div className="navbar">
        <NavLink to="/" activeClassName="is-active" exact={true} className="navbarLink">All</NavLink> <span></span>
        <NavLink to="/shortlist" activeClassName="is-active" className="navbarLink">Shortlist</NavLink>
    </div>
)

export default Header