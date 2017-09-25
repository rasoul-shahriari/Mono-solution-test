import React, { Component } from 'react';

import Menu from './menu';

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                {this.props.children}
            </div>
        );
    }
}

export default App;
