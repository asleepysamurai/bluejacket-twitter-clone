/**
 * Stream related routes
 */

import React from 'react';

import StreamListView from '../views/StreamList';
import addHeaderComponent from './header';

/**
 * Retrieves top 20 items from '/api/v1/:user/tweets'
 * And renders them here
 *
 * We'll assume that the user is always logged in and
 * their user id is always 'lestrade'.
 */
async function list(context) {
    const userId = 'lestrade';

    const response = await fetch(`http://localhost:4000/api/v1/${userId}/stream`);
    const streamItems = (await response.json()).data;

    function renderComponent(props) {
        context.addComponent(<StreamListView key="stream-list" {...props} />);
        context.render();
    };

    return renderComponent({
        tweets: streamItems
    });
};

function redirectToStreamList(router) {
    return function redirect(context) {
        router.resolve('/tweets');
    };
};

function setup(router) {
    router.handle('/', redirectToStreamList(router));
    router.handle('/tweets', addHeaderComponent, list);
};

export default setup;
