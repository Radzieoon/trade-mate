import React from 'react';

export const About = () => {
    return (
        <section className='section-about'>
            <h1>Trade Mate app is a tool designed to facilitate trading experience. In the first bigger release it will include features such as:</h1>
            <ul>
                <li>Presenting financial instruments on Bitmex exchange with the possibility to filter and sort needed instruments. Every instrument will have its own live prices and indices info shown and the feature to preview the general candlestick chart and orderbook chart</li>
                <li>The ability to set certain conditions which will trigger the alert or set up an order on the Bitmex exchange</li>
                <li>The ability to set orders manually or automatically based on set trigger conditions</li>
            </ul>
            <h2>The app is in the development state and the functionality may be faulty. The current app version is: v0.2.0</h2>
        </section>
    );
};