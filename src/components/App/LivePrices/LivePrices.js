import React, {Component,Fragment} from 'react';
import {ALL_INSTRUMENTS} from "../../../const";
import Instrument from './Instrument/Instrument';

export default class LivePrices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            fetchInterval: 2000
        }
    }
    filteredInstruments = () => {
        const {filter,fetchInterval} = this.state;
        if(filter === '') {
            return (
                ALL_INSTRUMENTS.map(symbol => {
                    return <Instrument key={symbol} symbol={symbol} fetchInterval={fetchInterval}/>
                })
            )
        } else {
            return (
                ALL_INSTRUMENTS.filter(symbol => {
                    return symbol.includes(filter.toUpperCase().replace(/\s+/g, ''))
                }).map(symbol => {
                    return <Instrument key={symbol} symbol={symbol} fetchInterval={fetchInterval}/>
                })
            )
        }
    };
    handleChange = (event) => {
        this.setState({
            filter: event.target.value
        })
    };
    render() {
        const {filter} = this.state;
        return (
            <Fragment>
                <h1>Check the live prices of the chosen instrument</h1>
                <input type="text" value={filter} onChange={this.handleChange}/>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Last Price</td>
                            <td>Ask Price</td>
                            <td>Bid Price</td>
                            <td>Volume 24h</td>
                            <td>Order Book</td>
                            <td>General Chart</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.filteredInstruments()}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}