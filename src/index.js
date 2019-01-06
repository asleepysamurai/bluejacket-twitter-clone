/**
 * Twitter-Clone SPA Entry Point
 */

import { default as BlueJacket } from 'bluejacket';

import { default as routes } from './routes';
import { default as mixins } from './mixins';

const router = new BlueJacket({
    mixins
});

function setupRoutes() {
    routes.forEach(setupRoute => setupRoute(router));
};

function setupLinkHandlers() {
    function resolveRoute(ev) {
        let node = ev.currentTarget;
        if (!node)
            return;

        let href = node.getAttribute('href');
        if (!href)
            return;

        router.resolve(href);
        return ev.preventDefault();
    };

    let observer = new MutationObserver(records => {
        document.querySelectorAll('a').forEach(linkNode => {
            linkNode.removeEventListener('click', resolveRoute);
            linkNode.addEventListener('click', resolveRoute);
        });
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
};

function init() {
    setupLinkHandlers();

    setupRoutes();
    router.resolve(window.location.pathname);
};

init();
