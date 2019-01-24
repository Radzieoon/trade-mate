import React, {Component} from 'react';
import {HashRouter,Switch,Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.scss';
import Template from './Template/Template';
import Home from './Home/Home';
import LivePrices from './LivePrices/LivePrices';
import OrderSet from './OrderSet/OrderSet';
import TriggerSettings from './TriggerSettings/TriggerSettings';
import About from './About/About';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';
import {IMAGES} from '../../const.js';

class App extends Component {
    componentDidMount() {
        let counter = 1;
        this.intervalId = setInterval(() => {
            document.body.style.background = `linear-gradient(170deg, rgba(210,209,255,0.8029586834733894) 0%, rgba(255,255,255,0.7973564425770308) 70%, rgba(171,29,13,0.3519782913165266) 100%), url(${IMAGES[counter]}) ${counter !== 1 ? 'center / cover' : ''}`;
            counter++;
            if(counter === 8) {counter = 0}
        },20000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <HashRouter>
                <Template>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/live_prices" render={props => <LivePrices {...props} fetchInterval={3000}/>} />
                        <Route path="/trigger_settings" component={TriggerSettings} />
                        <Route path="/order_set" component={OrderSet} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </Template>
            </HashRouter>
        );
    }
}
export default App;
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <ProjectNav className="App-ProjectNav">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </ProjectNav>
//       </div>
//     );
//   }
// }
