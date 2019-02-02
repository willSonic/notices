import { combineReducers } from 'redux';

import textTransform from './textTransform'

import { NotificationReducer } from '../snackbar/data_layer';

export default combineReducers({
    textTransform,
    NotificationReducer,
})
