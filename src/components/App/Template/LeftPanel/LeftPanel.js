import React, {Component} from 'react';
import "./_leftPanel.scss";
import {NavLink} from "react-router-dom";

export default class LeftPanel extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink to="/live_prices" activeClassName='active-function'>Live Prices</NavLink></li>
                    <li><NavLink to='/trigger_settings' activeClassName='active-function'>Trigger settings</NavLink></li>
                    <li><NavLink to='/order_set' activeClassName='active-function'>Order set</NavLink></li>
                </ul>
            </div>
        );
    }
}