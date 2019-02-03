import { ofType} from 'redux-observable';
import { of } from 'rxjs';
import { map, delay, mergeMap } from 'rxjs/operators'
import * as notificationActions from './notification_actions';
import {
    NOTIFICATION_TYPES,
    NOTIFICATION_MESSAGE,
    NOTIFICATION_DELAY
    } from "../business_layer/notification_consts";


export const epicPostingNotification = (action$) =>
  action$.pipe(
      ofType( notificationActions.POSTING_TRANSFORM_NOTIFICATION ),
      mergeMap(({payload}) => of(notificationActions.addNotification(payload )))
  );


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

export const epicAddNotification = (action$) =>
    action$.pipe(
      ofType(notificationActions.UPDATE_NOTIFICATION),
      delay(NOTIFICATION_DELAY),
      map((item) => notificationActions.removeNotification(item.payload))
    );


export const epicBeginManualRemoveNotification = (action$) =>
    action$.pipe(
      ofType(notificationActions.MANUAL_REMOVE_NOTIFICATION),
      mergeMap(( {payload}) => of(notificationActions.removeNotification(payload)))
    );
