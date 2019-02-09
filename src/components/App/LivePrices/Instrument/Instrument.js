import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine,faChartBar} from "@fortawesome/free-solid-svg-icons";

export default class Instrument extends Component {
    render() {
        const {data,openModal} = this.props;
        return (
            <Fragment>
                <tr>
                    <td>{data.symbol}</td>
                    <td>{data.lastPrice}</td>
                    <td>{data.askPrice}</td>
                    <td>{data.bidPrice}</td>
                    <td>{data.volume24h}</td>
                    <td>
                        <button onClick={() => openModal('orderBookSymbol',data.symbol)}><FontAwesomeIcon icon={faChartBar}/></button>
                    </td>
                    <td>
                        <button onClick={() => openModal('chartSymbol',data.symbol)}><FontAwesomeIcon icon={faChartLine}/></button>
                    </td>
                    <td>{data.timestamp}</td>
                </tr>
            </Fragment>
        );
    }
}