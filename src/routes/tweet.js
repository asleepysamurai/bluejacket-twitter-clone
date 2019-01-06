/**
 * Tweet related routes
 */

import React from 'react';

import TweetView from '../views/Tweet';

/**
 * Retrieves a tweet and it's replies by tweetId and renders it
 */
async function get(context) {
    const response = await fetch(`http://localhost:4000/api/v1/tweet/${context.params.tweetId}`);
    const tweetData = (await response.json()).data;

    function renderStreamView(props) {
        context.addComponent(<TweetView key={`tweet-${props.id}`} {...props} />);
        context.render();
    };

    return renderStreamView({ ...tweetData });
};

function setup(router) {
    router.handle('/tweet/:tweetId', get);
};

export default setup;
