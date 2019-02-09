import React, {Component} from 'react';
import {URL} from "../../../const";
import Instrument from './Instrument/Instrument';
import TVWidget from './TVWidget/TVWidget';
import {OrderBook} from './OrderBook/OrderBook';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp,faArrowDown,faArrowsAltH} from "@fortawesome/free-solid-svg-icons";

export default class LivePrices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartSymbol: '',
            data: [],
            filter: '',
            orderBookSymbol: '',
            sortedInstrumentsSymbols: [],
            sortAscending: {
                active: '',
                names: true,
                volumes: false
            }
        };
    }

    componentDidMount() {
        const {fetchInterval} = this.props;
        this.downloadInstrumentsChanges(true);
        this.intervalId = setInterval(() => this.downloadInstrumentsChanges(false), fetchInterval);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    downloadInstrumentsChanges = (isFirstTime) => {
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
            if(isFirstTime) {
                // console.log('first response: ',resp);
                const sortedInstrumentsSymbols = resp.map(el => el.symbol);
                // console.log('fetched intrument symbols: ',sortedInstrumentsSymbols);
                this.setState({
                    sortedInstrumentsSymbols
                });
            }
            // console.log('state-data: ',this.state.data);
            // console.log('state-sortedInstrumentsSymbols: ',this.state.sortedInstrumentsSymbols);
        });
    };
    compareValues = (givenArrayShouldAscending,a,b) => {
        if(givenArrayShouldAscending) {
            if(a < b) return -1;
            else if(a > b) return 1;
            return 0
        } else {
            if(b < a) return -1;
            else if(b > a) return 1;
            return 0
        }
    };
    sortInstruments = (sortParameter) => {
        let {sortedInstrumentsSymbols,sortAscending,data} = this.state;
        if(sortParameter === 'names') {
            sortedInstrumentsSymbols.sort((a,b) => this.compareValues(sortAscending.names,a,b));
            this.setState({
                sortAscending: {
                    ...sortAscending,
                    names: !sortAscending.names,
                    active: 'names'
                },
                sortedInstrumentsSymbols
            });
        } else if(sortParameter === 'volumes') {
            const dataSortedByVolume = data.sort((a,b) => this.compareValues(sortAscending.volumes,a.volume24h,b.volume24h));
            const sortedInstrumentsSymbols = dataSortedByVolume.map(el => el.symbol);
            this.setState({
                sortAscending: {
                    ...sortAscending,
                    volumes: !sortAscending.volumes,
                    active: 'volumes'
                },
                sortedInstrumentsSymbols
            })
        }
    };
    showSortArrows = (sortParameter) => {
        const {sortAscending} = this.state;
        if(sortParameter === 'names') {
            if(sortAscending.active !== 'names') {
                return <FontAwesomeIcon icon={faArrowsAltH}/>
            } else {
                return sortAscending.names ? <FontAwesomeIcon icon={faArrowUp}/> : <FontAwesomeIcon icon={faArrowDown}/>
            }
        } else if(sortParameter === 'volumes') {
            if(sortAscending.active !== 'volumes') {
                return <FontAwesomeIcon icon={faArrowsAltH}/>
            } else {
                return sortAscending.volumes ? <FontAwesomeIcon icon={faArrowUp}/> : <FontAwesomeIcon icon={faArrowDown}/>
            }
        }
    };
    filteredInstruments = () => {
        const {data,filter,sortedInstrumentsSymbols} = this.state;
        const filteredInstrumentsSymbols = filter === '' ? sortedInstrumentsSymbols : sortedInstrumentsSymbols.filter(symbol => {
            return symbol.includes(filter.toUpperCase().replace(/\s+/g, ''))
        });
        return (
            filteredInstrumentsSymbols.map(symbol => {
                const instrumentData = data.find(instrument => instrument.symbol.includes(symbol));
                return <Instrument key={symbol} data={instrumentData} openModal={this.getSymbolForModal}/>
            })
        )
    };
    handleInputChange = (event) => {
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
        const {filter,chartSymbol,orderBookSymbol,sortedInstrumentsSymbols} = this.state;
        return (
            <section className='section-live-prices'>
                <h1>Check the live prices of the chosen instrument</h1>
                <input type="text" value={filter} onChange={this.handleInputChange} placeholder='Filter by Name'/>
                <table>
                    <thead>
                        <tr>
                            <td onClick={() => this.sortInstruments('names')}>Name {this.showSortArrows('names')}</td>
                            <td>Last Price</td>
                            <td>Ask Price</td>
                            <td>Bid Price</td>
                            <td onClick={() => this.sortInstruments('volumes')}>Volume 24h {this.showSortArrows('volumes')}</td>
                            <td>Order Book</td>
                            <td>General Chart</td>
                            <td>Data Timestamp</td>
                        </tr>
                    </thead>
                    <tbody>
                    {sortedInstrumentsSymbols.length ? this.filteredInstruments() : <tr><td colSpan='8' className='loading-live-prices'>Loading...</td></tr>}
                    </tbody>
                </table>
                {chartSymbol.length > 0 && <TVWidget chartSymbol={chartSymbol} closeModal={this.closeModal}/>}
                {orderBookSymbol.length > 0 && <OrderBook orderBookSymbol={orderBookSymbol} closeModal={this.closeModal}/>}
            </section>
        );
    }
}
