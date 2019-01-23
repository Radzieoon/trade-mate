import React, {Component,Fragment} from 'react';
import {ALL_INSTRUMENTS} from "../../../const";
import Instrument from './Instrument/Instrument';
import TradingViewWidget, {Themes} from 'react-tradingview-widget';

export default class LivePrices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            fetchInterval: 2000,
            modalSymbol: ''/*{
                chart: '',
                orderBook: ''
            }*/
        }
    }
    filteredInstruments = () => {
        const {filter,fetchInterval} = this.state;
        if(filter === '') {
            return (
                ALL_INSTRUMENTS.map(symbol => {
                    return <Instrument key={symbol} symbol={symbol} fetchInterval={fetchInterval} openChart={this.getSymbolForModal} openOrderBook={this.openOrderBook}/>
                })
            )
        } else {
            return (
                ALL_INSTRUMENTS.filter(symbol => {
                    return symbol.includes(filter.toUpperCase().replace(/\s+/g, ''))
                }).map(symbol => {
                    return <Instrument key={symbol} symbol={symbol} fetchInterval={fetchInterval} openChart={this.getSymbolForModal} openOrderBook={this.openOrderBook}/>
                })
            )
        }
    };
    handleChange = (event) => {
        this.setState({
            filter: event.target.value
        })
    };
    //MODAL SYMBOL SPREADEM
    getSymbolForModal = (symbol) => {
        this.setState({
            modalSymbol: symbol
        })
    };
    closeModal = () => {
        this.setState({
            modalSymbol: ''
        })
    };
    openOrderBook = (symbol) => {
        this.getSymbolForModal(symbol)
    };
    render() {
        const {filter,modalSymbol} = this.state;
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
                {modalSymbol.length > 0 && (
                    <div>
                        <button onClick={this.closeModal}>X</button>
                        <TradingViewWidget /*autosize={true}*/ allow_symbol_change={false} hide_side_toolbar={false} symbol={modalSymbol} interval='1' theme={Themes.DARK} locale='pl' studies={['MASimple@tv-basicstudies', 'StochasticRSI@tv-basicstudies']} container_id='tradingview_a3d39'/>
                    </div>
                )}
            </Fragment>
        );
    }
}