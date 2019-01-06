/**
 * StreamListView Component
 *
 * Renders a list of stream items
 */

import React from 'react';

import Tweet from '../Tweet';
import './index.css';

class StreamList extends React.Component {
    static get defaultProps() {
        return {
            tweets: []
        };
    }
    render() {
        const tweetItems = this.props.tweets.map(tweet => {
            return (
                <a
                    className="tweet container"
                    key={tweet.id}
                    href={`/tweet/${tweet.id}`} >
                    <Tweet {...tweet} />
                </a>
            );
        });

        const component = (
            <div
                className="stream container">
                <h4>Your Tweet Stream</h4>
                <div
                    className="items">
                    {tweetItems}
                </div>
            </div>
        );

        return component;
    }
};

export default StreamList;
