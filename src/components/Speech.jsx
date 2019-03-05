import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SpeechView from './SpeechView'
import SpeechCreate from './SpeechCreate'

const Speech = ({match}) => {
    console.log("Speech", match.params.id);
    return ( 
        <BrowserRouter>
            <Switch>
                <Route path={`${match.url}/create`} component={SpeechCreate} />
                <Route exact path={`${match.url}/:id`} component={SpeechView} />
            </Switch>
        </BrowserRouter>
    );
}

export default Speech;