import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class ProjectNav extends Component {
    render() {
        return (
            <nav className='container'>
                <NavLink to="/">Trade<span>mate</span></NavLink>
                <ul>
                    <li><a href="https://www.bitmex.com/">Bitmex</a></li>
                    <li><NavLink to='/about' activeClassName='nav-active-function'>About</NavLink></li>
                    <li><NavLink to='/contact' activeClassName='nav-active-function'>Contact</NavLink></li>
                </ul>
            </nav>
        );
    }
}