/**
 * Header Component
 */

import React from 'react';

import './index.css';

class Header extends React.Component {
    render() {
        const component = (
            <div
                className="header">
                <a href="/"><h3>Twitter-Clone</h3></a>
            </div>
        );

        return component;
    }
};

export default Header;
