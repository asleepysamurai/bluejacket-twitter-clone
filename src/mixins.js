/**
 * Router mixins for Twitter-Clone
 */

import React from 'react';
import ReactDOM from 'react-dom';

function addComponent(component, key) {
    this.childList = this.childList || [];

    // If a key is not explicitly specified,
    // use the key prop of the React component
    key = key || component.key;

    if (!key)
        throw new Error('key is mandatory for adding a child component');

    let viewComponentExistsInChildList = false;

    this.childList.some((child, i) => {
        const childKeyMatchesThisKey = child.key && child.key === key;

        if (childKeyMatchesThisKey) {
            viewComponentExistsInChildList = true;
            this.childList[i] = component;
        }

        return viewComponentExistsInChildList;
    });

    if (!viewComponentExistsInChildList)
        this.childList.push(component);

    // To allow for chaining return the context
    return this;
};

function removeComponent(component, key) {
    this.childList = this.childList || [];

    // If a key is not explicitly specified,
    // use the key prop of the React component
    key = key || component.key;

    if (!key)
        throw new Error('key is mandatory for removing a child component');

    let indexOfChildWithMatchingKey = -1;

    for (let i = 0; i < this.childList.length; ++i) {
        const child = this.childList[i];
        const childKeyMatchesThisKey = child.key && child.key === key;

        if (childKeyMatchesThisKey) {
            indexOfChildWithMatchingKey = i;
            break;
        }
    }

    if (indexOfChildWithMatchingKey > -1)
        this.childList.splice(indexOfChildWithMatchingKey, 1);

    // To allow for chaining return the context
    return this;
};

function render() {
    this.childList = this.childList || [];

    let component = (<div className="root-container">{this.childList}</div>);

    ReactDOM.render(component, document.getElementById('root'), () => {
        // Scroll back to top, once rendering is complete
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    // To allow for chaining return the context
    return this;
};

export default {
    addComponent,
    removeComponent,
    render
};
