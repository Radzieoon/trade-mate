import React, {Fragment,Component} from 'react';
import {ProjectNav} from './ProjectNav/ProjectNav';
import {LeftPanel} from './LeftPanel/LeftPanel';
import BitmexLogo from '../../../images/bitmex-logo-alt-white.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export default class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftPanelVisible: false
        }
    }

    triggerLeftPanel = () => {
        this.setState({
            leftPanelVisible: !this.state.leftPanelVisible
        })
    };
    render() {
        const {leftPanelVisible} = this.state;
        const {children} = this.props;
        return (
            <Fragment>
                <header>
                    <ProjectNav/>
                </header>
                <main>
                    <div>
                        <button onClick={this.triggerLeftPanel} className={leftPanelVisible ? 'left-panel-visible' : 'left-panel-out'}><FontAwesomeIcon icon={faBars}/></button>
                        <LeftPanel handleLeftPanelClass={leftPanelVisible}/>
                        {children}
                    </div>
                </main>
                <footer>
                    <a href='https://github.com/Radzieoon/trade-mate'><FontAwesomeIcon icon={faGithub} size='2x' /></a>
                    <div>2019</div>
                    <a href='https://www.bitmex.com/'><img src={BitmexLogo} alt='bitmex-logo'/></a>
                </footer>
            </Fragment>
        );
    }
};