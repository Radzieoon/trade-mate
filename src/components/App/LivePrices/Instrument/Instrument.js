import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine,faChartBar} from "@fortawesome/free-solid-svg-icons";

export default class Instrument extends Component {
    // constructor(props) {
    //     super(props);
    //
    // }

    render() {
        // const {data} = this.state;
        const {symbol,openModal} = this.props;
        // if(!data) {
        //     return <tr><td>Loading...</td></tr>
        // }
        return (
            <Fragment>
                <tr>
                    {/*<td>{data.symbol}</td>*/}
                    {/*<td>{data.lastPrice}</td>*/}
                    {/*<td>{data.askPrice}</td>*/}
                    {/*<td>{data.bidPrice}</td>*/}
                    {/*<td>{data.volume24h}</td>*/}
                    <td>
                        {/*<button onClick={() => openModal(symbol,'orderBook')}><FontAwesomeIcon icon={faChartBar}/></button>*/}
                    </td>
                    <td>
                        {/*<button onClick={() => openModal(symbol,'chart')}><FontAwesomeIcon icon={faChartLine}/></button>*/}
                    </td>
                    {/*<td>{data.timestamp}</td>*/}
                </tr>
            </Fragment>
        );
    }
}