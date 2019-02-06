import React, {Component} from 'react';
import {ALL_INSTRUMENTS, URL} from "../../../const";
import Instrument from './Instrument/Instrument';
import TradingViewWidget, {Themes} from 'react-tradingview-widget';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose,faArrowUp,faArrowDown} from "@fortawesome/free-solid-svg-icons";

export default class LivePrices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartSymbol: '',
            data: [],
            filter: '',
            orderBookSymbol: '',
            sortedInstruments: ALL_INSTRUMENTS,
            sortAscending: true
        }
    }

    componentDidMount() {
        const {fetchInterval} = this.props;
        this.intervalId = setInterval(this.downloadInstrumentsChanges, fetchInterval);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    downloadInstrumentsChanges = () => {
        const {data} = this.state;
        fetch(`${URL}instrument`,{headers: {'accept': 'application/json'}}).then(resp => {
            if(resp.ok) {
                return resp.json()
            } else {
                console.log(resp)
            }
        }).then(resp => {
            resp.forEach((el,index,arr) => arr[index] = el[0]);
            this.setState({
                data: resp
            });
            console.log('data-state: ',data);
        });
    };
    sortInstrumentsNames = () => {
        let {sortedInstruments,sortAscending} = this.state;
        sortedInstruments.sort((a,b) => {
           if(sortAscending) {
               if(a < b) {
                   return -1
               } else if(a > b) {
                   return 1
               } else return 0
           } else {
               if(b < a) {
                   return -1
               } else if(b > a) {
                   return 1
               } else return 0
           }
        });
        this.setState({
            sortAscending: !sortAscending,
            sortedInstruments: sortedInstruments
        })
    };
    filteredInstruments = () => {
        const {filter,sortedInstruments,data} = this.state;
        if(filter === '') {
            return (
                sortedInstruments.map(symbol => {
                    return <Instrument key={symbol} symbol={symbol} openModal={this.getSymbolForModal}/>
                })
            )
        } else {
            return (
                sortedInstruments.filter(symbol => {
                    return symbol.includes(filter.toUpperCase().replace(/\s+/g, ''))
                }).map(symbol => {
                    return <Instrument key={symbol} symbol={symbol} openModal={this.getSymbolForModal}/>
                })
            )
        }
    };
    handleChange = (event) => {
        this.setState({
            filter: event.target.value
        })
    };
    getSymbolForModal = (symbol,type) => {
        if(type === 'chart') {
            this.setState({
                chartSymbol: symbol
            })
        } else if(type === 'orderBook') {
            this.setState({
                orderBookSymbol: symbol
            })
        }
    };
    closeModal = (type) => {
        if(type === 'chart') {
            this.setState({
                chartSymbol: ''
            })
        } else if(type === 'orderBook') {
            this.setState({
                orderBookSymbol: ''
            })
        }
    };
    render() {
        const {filter,chartSymbol,orderBookSymbol,sortAscending} = this.state;
        return (
            <section className='section-live-prices'>
                <h1>Check the live prices of the chosen instrument</h1>
                <input type="text" value={filter} onChange={this.handleChange} placeholder='Filter by Name'/>
                <table>
                    <thead>
                        <tr>
                            <td onClick={this.sortInstrumentsNames}>Name {sortAscending ? <FontAwesomeIcon icon={faArrowUp}/> : <FontAwesomeIcon icon={faArrowDown}/>}</td>
                            <td>Last Price</td>
                            <td>Ask Price</td>
                            <td>Bid Price</td>
                            <td>Volume 24h</td>
                            <td>Order Book</td>
                            <td>General Chart</td>
                            <td>Data Timestamp</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.filteredInstruments()}
                    </tbody>
                </table>
                {chartSymbol.length > 0 && (
                    <div>
                        <button onClick={() => this.closeModal('chart')}><FontAwesomeIcon icon={faWindowClose} /></button>
                        <TradingViewWidget autosize={true} allow_symbol_change={false} hide_side_toolbar={false} symbol={chartSymbol} interval='60' theme={Themes.DARK} locale='pl' studies={['MASimple@tv-basicstudies', 'StochasticRSI@tv-basicstudies']} container_id='tradingview_a3d39'/>
                    </div>
                )}
                {orderBookSymbol.length > 0 && (
                    <div>
                        <button onClick={() => this.closeModal('orderBook')}><FontAwesomeIcon icon={faWindowClose} /></button>
                        HELLO, I'M AN ORDER BOOK
                    </div>
                )}
            </section>
        );
    }
}
