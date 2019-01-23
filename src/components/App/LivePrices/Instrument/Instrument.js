import React, {Component, Fragment} from 'react';
// import Basic from './Basic/Basic';

export default class Instrument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderBookOpened: false,
            chartOpened: false
        }
    }

    openOrderBook = () => {
        this.setState({
            orderBookOpened: true
        })
    };
    openChart = () => {
        this.setState({
            chartOpened: true
        })
    };
    render() {
        const {instruments} = this.props;
        const {orderBookOpened, chartOpened} = this.state;
        if (instruments.length === 0) {
            return null
        }
        return (
            instruments.map(el => {
                return (
                    <Fragment key={el.symbol}>
                        <tr>
                            <td>{el.symbol}</td>
                            <td>{el.lastPrice}</td>
                            <td>{el.askPrice}</td>
                            <td>{el.bidPrice}</td>
                            <td>{el.volume24h}</td>
                            <td>
                                <button onClick={this.openOrderBook}>Open</button>
                            </td>
                            <td>
                                <button onClick={this.openChart}>Open</button>
                            </td>
                            {/*<td>{el.timestamp}</td>*/}
                        </tr>
                        {orderBookOpened && <div className='orderBook'></div>}
                        {chartOpened && <div className='chart'></div>}
                    </Fragment>
                )
            })
        );
    }
}