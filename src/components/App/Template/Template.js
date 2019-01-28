import React, {Fragment} from 'react';
import {ProjectNav} from './ProjectNav/ProjectNav';
import {LeftPanel} from './LeftPanel/LeftPanel';
import BitmexLogo from '../../../images/bitmex-logo-alt-white.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export const Template = (props) => {
    return (
        <Fragment>
            <header>
                <ProjectNav/>
            </header>
            <main>
                <div>
                    <LeftPanel/>
                    {props.children}
                </div>
            </main>
            <footer>
                <a href='https://github.com/Radzieoon/trade-mate'><FontAwesomeIcon icon={faGithub} size='2x' /></a>
                <div>2019</div>
                <a href='https://www.bitmex.com/'><img src={BitmexLogo} alt='bitmex-logo'/></a>
            </footer>
        </Fragment>
    );
};