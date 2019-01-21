import React, {Component, Fragment} from 'react';

export default class Contact extends Component {
    render() {
        return (
            <Fragment>
                <h1>Contact me at:</h1>
                <ul>
                    <li>E-mail: rgrabowski.biz@gmail.com</li>
                    <li>Phone no.: +48 691044199</li>
                    <li><a href='https://github.com/Radzieoon'>Github</a></li>
                    <li><a href='https://twitter.com/Radzieoon'>Twitter</a></li>
                </ul>
            </Fragment>
        );
    }
}