import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'

import Routes from './src/routes'
import reducers from './reducers'

export default class App extends Component {
    render() {
        const state = createStore(reducers,{}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={state}>
                <Routes/>
            </Provider>
        )
    }
}
