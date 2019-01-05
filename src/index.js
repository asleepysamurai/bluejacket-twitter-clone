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

function init() {
    setupRoutes();
    router.resolve(window.location.pathname);
};

init();
