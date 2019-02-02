import { createStore, applyMiddleware, compose } from 'redux'

import { createEpicMiddleware } from 'redux-observable';
import { NotificationEpics } from "./snackbar/data_layer";

import Thunk from 'redux-thunk'
import reducer from './store'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware( );

export default function configureStore() {
    /*
       Creating this as constant so that we can call
       epicMiddleware.run after store is created
     */
    const storeCreated =  createStore(
        reducer,
        composeEnhancers(
            applyMiddleware(Thunk, epicMiddleware)
        )
    );
    epicMiddleware.run( NotificationEpics );
    return storeCreated
}
