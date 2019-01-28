import React from 'react';
import {NavLink} from "react-router-dom";

export const ProjectNav = () => {
    return (
        <nav className='container'>
            <NavLink to="/">Trade<span>mate</span></NavLink>
            <ul>
                <li><NavLink to='/roadmap' activeClassName='nav-active-function'>Roadmap</NavLink></li>
                <li><NavLink to='/about' activeClassName='nav-active-function'>About</NavLink></li>
                <li><NavLink to='/contact' activeClassName='nav-active-function'>Contact</NavLink></li>
            </ul>
        </nav>
    );
};