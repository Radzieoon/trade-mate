import React, {Component, Fragment} from 'react';
import ProjectNav from './ProjectNav/ProjectNav';
import LeftPanel from './LeftPanel/LeftPanel';

export default class Template extends Component{
    render() {
        return (
            <Fragment>
                <header>
                    <ProjectNav/>
                </header>
                <main>
                    <div>
                        <LeftPanel/>
                        {this.props.children}
                    </div>
                </main>
                <footer>2019</footer>
            </Fragment>
        );
    }
}