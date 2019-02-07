import React,{PureComponent} from "react";
import TradingViewWidget,{Themes} from 'react-tradingview-widget';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

export default class TVWidget extends PureComponent {
    render() {
        const {chartSymbol,closeModal} = this.props;
        return (
            <div>
                <button onClick={() => closeModal('chart')}><FontAwesomeIcon icon={faWindowClose} /></button>
                <TradingViewWidget autosize={true} allow_symbol_change={false} hide_side_toolbar={false} symbol={chartSymbol} interval='60' theme={Themes.DARK} locale='pl' studies={['MASimple@tv-basicstudies', 'StochasticRSI@tv-basicstudies']} container_id='tradingview_a3d39'/>
            </div>
        )
    }
}
