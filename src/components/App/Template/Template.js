import React, {Component, Fragment} from 'react';
import ProjectNav from './ProjectNav/ProjectNav';
import LeftPanel from './LeftPanel/LeftPanel';
import "./_template.scss"

export default class Template extends Component{
    render() {
        return (
            <Fragment>
                <header>
                    <ProjectNav className='template'/>
                </header>
                <main>
                    <LeftPanel/>
                    {this.props.children}
                </main>
                <footer>stopka</footer>
            </Fragment>
        );
    }
}