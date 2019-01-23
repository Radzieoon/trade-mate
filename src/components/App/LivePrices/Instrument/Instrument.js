import React, {Component, Fragment} from 'react';
import {URL} from "../../../../const";

export default class Instrument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        this.intervalId = setInterval(this.downloadInstrumentChanges, this.props.fetchInterval);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    downloadInstrumentChanges = () => {
        const {data} = this.state;
        fetch(`${URL}instrument/?symbol=${this.props.symbol}`,{headers: {'accept': 'application/json'}}).then(resp => {
            if(resp.ok) {
                return resp.json()
            } else {
                console.log(resp)
            }
        }).then(bresp => {
            // console.log('bresp[0]: ',bresp[0]);
            this.setState({
                data: bresp[0]
            });
            console.log('data-state: ',data);
        });
    };

    render() {
        const {data} = this.state;
        if(!data) {
            return <tr><td>Loading...</td></tr>
        }
        return (
            <Fragment>
                <tr>
                    <td>{data.symbol}</td>
                    <td>{data.lastPrice}</td>
                    <td>{data.askPrice}</td>
                    <td>{data.bidPrice}</td>
                    <td>{data.volume24h}</td>
                    <td>
                        <button onClick={this.openOrderBook}>Open</button>
                    </td>
                    <td>
                        <button onClick={() => this.props.openChart(this.props.symbol)}>Open</button>
                    </td>
                    <td>{data.timestamp}</td>
                </tr>
            </Fragment>
        );
    }
}