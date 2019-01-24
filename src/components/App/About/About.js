import React, {Component} from 'react';

export default class About extends Component {
    render() {
        return (
            <section className='section-about'>
                <h1>Trade Mate app is a tool designed to facilitate trading experience. It includes features such as:</h1>
                <ul>
                    <li>Presenting financial instruments on Bitmex exchange with the possibility to filter and sort needed instruments. Every instrument has its own live prices and indices info shown and the feature to preview the general candlestick chart</li>
                    <li>The ability to set certain conditions which will trigger the alert or set an order on the Bitmex exchange</li>
                    <li>The ability to set orders manually or automatically based on set trigger conditions</li>
                </ul>
                <h2>The app is in the development state and the functionality may be faulty. The current app version is: v0.0.1</h2>
            </section>

        );
    }
}