import React, {Component,Fragment} from 'react';
import {url,xbtusd,ethusd,bchh19,xrph19,adah19,ltch19,trxh19,eosh19} from "../../../const";
import Basic from "./Basic/Basic";

export default class LivePrices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    downloadChanges = () => {
        const {data} = this.state;
        fetch(`${url}instrument/${xbtusd}`,{headers: {'accept': 'application/json'}}).then(resp => {
            if(resp.ok) {
                return resp.json()
            } else {
                console.log(resp)
            }
        }).then(bresp => {
            if(data.length === 0) {
                // console.log(bresp[0]);
                const newData = data;
                newData.push(bresp[0]);
                console.log(newData);
                this.setState({
                    data: newData
                })
            } else {
                const indexOfDataToReplace = data.map(el => el.symbol).indexOf(bresp[0].symbol);
                const newData = data.splice(indexOfDataToReplace, 1, bresp[0]);
                this.setState({
                    data: newData
                });
                console.log('Data-state index of fetched resp: ',indexOfDataToReplace, 'data-state length: ',data.length);
                console.log('data-state: ',data);
            }
            // console.log(data);
        })
    };
    componentDidMount() {
        this.intervalId = setInterval(this.downloadChanges, this.props.fetchInterval);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        const {data} = this.state;
        if(data.length === 0) {
            return <h1>Loading...</h1>
        }
        return (
            <Fragment>
                <h1>Check the live prices of the chosen instrument</h1>
                <div>
                    Last BTC Bitmex Price: <Basic type={data[0].lastPrice}/>$
                </div>
            </Fragment>
        );
    }
}