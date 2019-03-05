import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import Speech from './components/Speech'

import 'bootstrap/dist/css/bootstrap.css'

const AppRouter = (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/speech" component={Speech} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(AppRouter, document.getElementById('root'))
