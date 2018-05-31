import { createStore, applyMiddleware, compose } from 'redux'
import Thunk from 'redux-thunk'
import reducer from './store'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore() {
    return createStore(
        reducer,
        composeEnhancers(
            applyMiddleware(Thunk)
        )
    )
}