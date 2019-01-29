import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle,faCheckCircle,faDotCircle} from "@fortawesome/free-solid-svg-icons";

export const Roadmap = () => {
    return (
        <section className='section-roadmap'>
            <h1>Feature roadmap</h1>
            <ul>
                <li>
                    <div><FontAwesomeIcon icon={faDotCircle} size={'xs'}/>01-2019</div>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckCircle} size={'xs'}/>Delta Server set up and configured</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} size={'xs'}/>Router app structure</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} size={'xs'}/>Fetching live prices from delta server</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} size={'xs'}/>Filtering and sorting instruments by name</li>
                        <li><FontAwesomeIcon icon={faDotCircle} size={'xs'}/>Sorting instruments by volume</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} size={'xs'}/>Dialog window with the general chart of the coresponding instrument</li>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>Dialog window with an orderbook created on the fetched data basis</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} size={'xs'}/>Basic app styling</li>
                        <li><FontAwesomeIcon icon={faDotCircle} size={'xs'}/>Full RWD</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} size={'xs'}/>Fix: delta server response structure for all symbols query at once</li>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>Fix: background switch</li>
                    </ul>
                </li>
                <li>
                    <div><FontAwesomeIcon icon={faCircle} size={'xs'}/>02-2019</div>
                    <ul>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>Fix: reduce the fetches amount after delta server response fix</li>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>Introduce alerting on set price conditions</li>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>Create the technical indicators logic (their math representation based on the fetched data)</li>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>Access to the Bitmex's personal account data</li>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>Introduce new alert triggers based on set conditions of technical indicators, already taken trade position and account balance</li>
                    </ul>
                </li>
                <li>
                    <div><FontAwesomeIcon icon={faCircle} size={'xs'}/>03-2019</div>
                    <ul>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>Saving trigger settings in localStorage</li>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>Manual bid/ask order set up on the Bitmex echange through the API</li>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>After deep testing: Automatic order set up based on triggers settings</li>
                    </ul>
                </li>
                <li>
                    <div><FontAwesomeIcon icon={faCircle} size={'xs'}/>04-2019</div>
                    <ul>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>Introduce Binance API</li>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>Transaction statistics</li>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>History of transactions</li>
                    </ul>
                </li>
                <li>
                    <div><FontAwesomeIcon icon={faCircle} size={'xs'}/>05-2019 and later</div>
                    <ul>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>Logging and setting up personal API keys in the app</li>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>More exchanges</li>
                        <li><FontAwesomeIcon icon={faCircle} size={'xs'}/>Introduce arbitrage triggers for the alerts</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};