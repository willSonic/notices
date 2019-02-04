import axios from 'axios'


/**
* Imports for Building Notification and Dispatching Actions
*/
import {
 NotificationActions,
 notificationBuilder,
} from '../snackbar/data_layer';

import{
    NOTIFICATION_TYPES,
    NOTIFICATION_MESSAGE } from "../snackbar/business_layer/notification_consts";


const TRANSFORM_VALUE_LOAD = 'TRANSFORM_VALUE_LOAD'
const TRANSFORM_VALUE_SUCCESS = 'TRANSFORM_VALUE_SUCCESS'
const TRANSFORM_VALUE_ERROR = 'TRANSFORM_VALUE_ERROR'

const LOWERCASE_ENDPOINT = '/api/lowercase'
const UPPERCASE_ENDPOINT = '/api/uppercase'

const UPPERCASE = 'uppercase'
const LOWERCASE = 'lowercase'

const transformText = (input, mode = LOWERCASE) => dispatch => {
    mode = mode.toLowerCase()
    const endpoint = mode === UPPERCASE ? UPPERCASE_ENDPOINT : LOWERCASE_ENDPOINT

    dispatch({ type: TRANSFORM_VALUE_LOAD })



    /*
    * Creates a Notification as a LOADING type,
    * and dispatches it
    */

    const newNotfication = notificationBuilder(
          {
            message:NOTIFICATION_MESSAGE.LOADING,
            inputData:input,
            transformType:mode+'Transform',
            type: NOTIFICATION_TYPES.LOADING,
          });
    dispatch(NotificationActions.addNotification(newNotfication));


    axios.post(endpoint, { input })
        .then(res => {
                /*
                * Dispatches  original Loading Notification to handle side effect of updating to a Success Notification
                * before updating store;
                */
              dispatch( NotificationActions.createSuccessNotification({notification:newNotfication}) );



              return dispatch(  { type: TRANSFORM_VALUE_SUCCESS, payload: res.data } );
        })
        .catch(err => {
                /*
                * Dispatches  original Loading Notification to handle side effect of updating to a Error Notification
                * before updating store;
                */
              const errorResponse = {notification:newNotfication, err:{...err.response}};
              dispatch( NotificationActions.createErrorNotification(errorResponse) );



              return dispatch( { type: TRANSFORM_VALUE_ERROR, payload: err });
        });
};

export const transformToLowerCase = input => transformText(input)
export const transformToUpperCase = input => transformText(input, UPPERCASE)

const initialState = {
    transformedValue: '',
    isLoading: false,
    error: null
}

export default function textTransform(state = initialState, { type, payload }) {
    switch (type) {
        case TRANSFORM_VALUE_LOAD:
            return { ...state, isLoading: true, transformedValue: '' }
        case TRANSFORM_VALUE_SUCCESS:
            return { ...state, isLoading: false, transformedValue: payload.output }
        case TRANSFORM_VALUE_ERROR:
            return { ...state, isLoading: false, error: payload.message }
        default: return state
    }
}
