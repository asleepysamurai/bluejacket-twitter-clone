/**
 * Tweet Component
 */

import React from 'react';

import './index.css';

class Tweet extends React.Component {
    static get defaultProps() {
        return {
            user: {},
            content: ''
        };
    }
    render() {
        const component = (
            <div
                className="tweet">
                <div
                    className="author">
                    {this.props.user.name}
                </div>
                <div
                    className="content">
                    {this.props.content}
                </div>
            </div>
        );

        return component;
    }
};

export default Tweet;
