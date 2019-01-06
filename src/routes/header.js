/**
 * Header middleware handler
 */

import React from 'react';

import Header from '../views/Header';

async function addHeaderComponent(context) {
    context.addComponent(<Header key="page-header" />);
};

export default addHeaderComponent;
