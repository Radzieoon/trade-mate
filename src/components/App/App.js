import React, {Component} from 'react';
import {HashRouter,Switch,Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Template from './Template/Template';
import Home from './Home/Home';
import LivePrices from './LivePrices/LivePrices';
import OrderSet from './OrderSet/OrderSet';
import TriggerSettings from './TriggerSettings/TriggerSettings';
import About from './About/About';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Template>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/live_prices" component={LivePrices} />
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
