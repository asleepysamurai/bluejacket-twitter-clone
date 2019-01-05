/**
 * Stream related routes
 */

import React from 'react';

import StreamListView from '../views/StreamList';

/**
 * Retrieves top 20 items from '/api/v1/:user/stream'
 * And renders them here
 *
 * We'll assume that the user is always logged in and
 * their user id is always 'lestrade'.
 */
async function list(context) {
    const userId = 'lestrade';

    const response = await fetch(`http://localhost:4000/api/v1/${userId}/stream`);
    const streamItems = (await response.json()).data;

    function renderStreamView(props) {
        context.addComponent(<StreamListView key="stream-list" {...props} />);
        context.render();
    };

    return renderStreamView({
        tweets: streamItems
    });
};

function setup(router) {
    router.handle('/stream', list);
};

export default setup;
