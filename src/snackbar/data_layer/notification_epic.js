import { ofType} from 'redux-observable';
import { of } from 'rxjs';
import { map, delay, mergeMap } from 'rxjs/operators'
import * as notificationActions from './notification_actions';
import {
    NOTIFICATION_TYPES,
    NOTIFICATION_MESSAGE,
    NOTIFICATION_DELAY
    } from "../business_layer/notification_consts";



/**
* Watches for successfully Transform response.
* @param action$
* @return {ActionsObservable} - dispatch to Update Notification in  Notification Reducer
*/
export const epicCreateSuccessNotification = (action$) =>
  action$.pipe(
      ofType( notificationActions.CREATE_SUCCESS_NOTIFICATION ),
      mergeMap(({payload}) =>{
        const newNotification = {
             ...payload.notification,
            statusCode:200,
            message:NOTIFICATION_MESSAGE.SUCCESS,
            type:NOTIFICATION_TYPES.SUCCESS,
          };
        return  of(notificationActions.updateNotification( newNotification ));
      })
  );



/**
* Watches for incorrect Transform response.
* @param action$ ( notification Object)
* @return {ActionsObservable} - dispatch to Update Notification in  Notification Reducer
*/

export const epicCreateErrorNotification = (action$) =>
    action$.pipe(
      ofType(notificationActions.CREATE_ERROR_NOTIFICATION),
      mergeMap(( {payload}) =>{
        const { status, data} = payload.err;
        const newNotification = {
             ...payload.notification,
            statusCode:status,
            message:data.message,
            type:NOTIFICATION_TYPES.ERROR,
        };
        return of(notificationActions.updateNotification( newNotification ));
      })
    );



/**
* Watches for any update Action from Success or Errror update Action .
* @param action$ ( notification Object)
* @return {ActionsObservable} - After Specified Delay issues action to remove Notification
*/
export const epicUpdateNotification = (action$) =>
    action$.pipe(
      ofType(notificationActions.UPDATE_NOTIFICATION),
      delay(NOTIFICATION_DELAY),
      map((item) => notificationActions.removeNotification(item.payload))
    );



/**
* Watches for manual request to remove Notification  .
* @param action$ ( notification Object)
* @return {ActionsObservable} - simply forwards remove Notification request
*/
export const epicBeginManualRemoveNotification = (action$) =>
    action$.pipe(
      ofType(notificationActions.MANUAL_REMOVE_NOTIFICATION),
      mergeMap(( {payload}) => of(notificationActions.removeNotification(payload)))
    );
