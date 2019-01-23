import React, {Component,Fragment} from 'react';
import {ALL_INSTRUMENTS} from "../../../const";
// import Instrument from './Instrument/Instrument';
// import Basic from "./Instrument/Basic/Basic";
import InstrumentTest from './InstrumentTest/InstrumentTest';

export default class LivePrices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            fetchInterval: 2000
        }
    }
    // getInstruments = () => {
    //     ALL_INSTRUMENTS.forEach(symbol => this.downloadInstrumentChanges(symbol));
    // };
    // downloadInstrumentChanges = (symbol) => {
    //     const {data} = this.state;
    //     fetch(`${URL}instrument/${symbol}`,{headers: {'accept': 'application/json'}}).then(resp => {
    //         if(resp.ok) {
    //             return resp.json()
    //         } else {
    //             console.log(resp)
    //         }
    //     }).then(bresp => {
    //         const indexOfDataToReplace = data.map(el => el.symbol).indexOf(bresp[0].symbol);
    //         if(indexOfDataToReplace < 0) {
    //             this.setState({
    //                 data: [...data,bresp[0]]
    //             })
    //         } else {
    //             // data.splice(indexOfDataToReplace, 1, bresp[0]);
    //             const newData = [...data];
    //             newData[indexOfDataToReplace] = bresp[0];
    //             this.setState({
    //                 data: newData
    //             });
    //             console.log('Data-state index of fetched resp: ',indexOfDataToReplace, 'data-state length: ',data.length);
    //             console.log('data-state: ',data);
    //         }
    //         // console.log(data);
    //     })
    // };
    // componentDidMount() {
    //     this.intervalId = setInterval(this.getInstruments, this.props.fetchInterval);
    // }
    // componentWillUnmount() {
    //     clearInterval(this.intervalId);
    // }
    filteredInstruments = () => {
        const {filter,fetchInterval} = this.state;
        if(filter === '') {
            return (
                ALL_INSTRUMENTS.map(symbol => {
                    return <InstrumentTest key={symbol} symbol={symbol} fetchInterval={fetchInterval}/>
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
        // const {data} = this.state;
        // if(data.length === 0) {
        //     return <h1>Loading...</h1>
        // }
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
                        {/*<Instrument instruments={data}/>*/}
                        {this.filteredInstruments()}
                        {/*<InstrumentTest symbol={ALL_INSTRUMENTS[0]} fetchInterval={2000}/>*/}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}