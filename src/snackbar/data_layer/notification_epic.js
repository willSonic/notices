import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { map, delay, mergeMap } from 'rxjs/operators'
import * as notificationActions from './notification_actions';
import { buildNotification} from "./notification_model_factory";

export const epicCreateSuccessNotification = (action$) =>
  action$.pipe(
      ofType( notificationActions.CREATE_SUCCESS_NOTIFICATION ),
      mergeMap(() =>{
        const newNotification = buildNotification(
          {
            statusCode:200,
            message:"Successful Transformation",
            type:'SUCCESS'
          });
        return  of(notificationActions.addNotification( newNotification ));
      })
  );

  export const epicCreateErrorNotification = (action$) =>
  action$.pipe(
      ofType(notificationActions.CREATE_ERROR_NOTIFICATION),
      mergeMap(( {payload}) =>{
        const { status, data} = payload.err.response;
        const newNotification = buildNotification(
          {
            statusCode:status,
            message:data.message,
            type:'ERROR'
          });
        return  of(notificationActions.addNotification( newNotification ));
      })
  );
