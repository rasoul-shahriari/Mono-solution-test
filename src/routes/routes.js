import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import About from '../components/about';
import Home from '../components/home';
import Form from '../components/form';
import App from '../components/app';

class Routers extends Component {
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/form" component={Form} />
                        <Route component={Home} />
                    </Switch>
                </App>
            </BrowserRouter>
        )
    }
}

export default Routers;
