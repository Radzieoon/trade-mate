import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./_projectNav.scss";

export default class ProjectNav extends Component {
    render() {
        return (
            <nav>
                <NavLink to="/">Trade<span>mate</span></NavLink>
                <ul>
                    <li><a href="https://www.bitmex.com/">Bitmex</a></li>
                    <li><NavLink to='/about' activeClassName='active-function'>About</NavLink></li>
                    <li><NavLink to='/contact' activeClassName='active-function'>Contact</NavLink></li>
                </ul>
            </nav>
        );
    }
}