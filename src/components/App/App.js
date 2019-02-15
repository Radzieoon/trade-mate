import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import './App.scss';
import Template from './Template/Template';
import {Home} from './Home/Home';
import LivePrices from './LivePrices/LivePrices';
import OrderSet from './OrderSet/OrderSet';
import TriggerSettings from './TriggerSettings/TriggerSettings';
import {About} from './About/About';
import {Contact} from './Contact/Contact';
import {NotFound} from './NotFound/NotFound';
import {Roadmap} from "./Roadmap/Roadmap";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Template>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/live_prices" render={props => <LivePrices {...props} fetchInterval={1000}/>} />
                        <Route path="/trigger_settings" component={TriggerSettings} />
                        <Route path="/order_set" component={OrderSet} />
                        <Route path="/roadmap" component={Roadmap} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </Template>
            </BrowserRouter>
        );
    }
}