import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

export const OrderBook = ({orderBookSymbol,closeModal}) => {
    return (
        <div>
            <button onClick={() => closeModal('orderBook')}><FontAwesomeIcon icon={faWindowClose} /></button>
            HELLO, I'M AN ORDER BOOK
        </div>
    )
};
