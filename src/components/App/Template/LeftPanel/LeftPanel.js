import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class LeftPanel extends Component {
    render() {
        return (

            <section className='section-left-panel'>
                <ul>
                    <li><NavLink to="/live_prices" activeClassName='left-panel-active-function'>Live Prices</NavLink></li>
                    <li><NavLink to='/trigger_settings' activeClassName='left-panel-active-function'>Trigger settings</NavLink></li>
                    <li><NavLink to='/order_set' activeClassName='left-panel-active-function'>Order set</NavLink></li>
                </ul>
            </section>
        );
    }
}