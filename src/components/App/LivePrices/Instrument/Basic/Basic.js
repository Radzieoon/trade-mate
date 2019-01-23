import React, {Component, Fragment} from 'react';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <span>{this.props.type}</span>
            </Fragment>
        );
    }
}