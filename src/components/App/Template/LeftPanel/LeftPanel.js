import React from 'react';
import {NavLink} from "react-router-dom";

export const LeftPanel = (props) => {
    return (
        <section className={`section-left-panel ${props.handleLeftPanelClass ? 'left-panel-visible' : ''}`}>
            <ul>
                <li><NavLink to="/live_prices" activeClassName='left-panel-active-function'>Live Prices</NavLink></li>
                <li><NavLink to='/trigger_settings' activeClassName='left-panel-active-function'>Trigger settings</NavLink></li>
                <li><NavLink to='/order_set' activeClassName='left-panel-active-function'>Order set</NavLink></li>
            </ul>
        </section>
    );
};