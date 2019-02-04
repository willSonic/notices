import {ActionsObservable, ofType} from 'redux-observable';
import {
    notificationBuilder,
    NotificationActions
} from "../index";

import {
  epicPostingNotification,
  epicCreateSuccessNotification,
  epicCreateErrorNotification
} from "../notification_epic";

import {
    NOTIFICATION_MESSAGE,
    NOTIFICATION_TYPES
} from "../../business_layer/notification_consts";
import {delay, map} from "rxjs/operators";


describe('Notification  Epics', () => {
 const input = 'misoSoup';
 const mode = 'uppercase';

 const initialState = {
  notificationCollection:[],
};

var newNotfication = notificationBuilder(
  {
    message:NOTIFICATION_MESSAGE.LOADING,
    inputData:input,
    transformType:mode+'Transform',
    type: NOTIFICATION_TYPES.LOADING,
  });


  describe('Epic responds to SUCCESS Notification from Transform Request', () => {
    it('dispatches the correct actions when it is successful', (done) => {
       const action$ = ActionsObservable.of(
           NotificationActions.createSuccessNotification({notification:newNotfication})
       );

       const successNotification = {
             ...newNotfication,
            statusCode:200,
            message:NOTIFICATION_MESSAGE.SUCCESS,
            type:NOTIFICATION_TYPES.SUCCESS,
       };

       const expectedOutputAction = NotificationActions.updateNotification(successNotification)
       epicCreateSuccessNotification(action$, null)
        .subscribe((actualOutputActions) => {
            expect(actualOutputActions).toEqual(expectedOutputAction);
            done();
          }
        );

    });
  });



  describe('Epic responds to a ERROR Notification from Transform Request', () => {
    it('dispatches the correct actions when', (done) => {
       const errResponse ={
            status:500,
            data: { message: 'Something went wrong!'},
       }


       const errorResponse = {notification:newNotfication, err:errResponse};
       const action$ = ActionsObservable.of(
           NotificationActions.createErrorNotification(errorResponse)
       );


       const errorNotification = {
             ...newNotfication,
            statusCode:errResponse.status,
            message:errResponse.data.message,
            type:NOTIFICATION_TYPES.ERROR,
       };

       const expectedOutputAction = NotificationActions.updateNotification(errorNotification);
       epicCreateErrorNotification(action$, null)
        .subscribe((actualOutputActions) => {
            expect(actualOutputActions).toEqual(expectedOutputAction);
            done();
          }
        );

    });
  });

  const epicUpdateNotification = (action$) =>
    action$.pipe(
      ofType(NotificationActions.UPDATE_NOTIFICATION),
      delay(500),
      map((item) => NotificationActions.removeNotification(item.payload))
    );



  describe('Epic Update Notification from create ERROR/SUCCESS update', () => {
    it('dispatches the correct action AFTER specified Delay,', (done) => {
      const successNotification = {
             ...newNotfication,
            statusCode:200,
            message:NOTIFICATION_MESSAGE.SUCCESS,
            type:NOTIFICATION_TYPES.SUCCESS,
       };


       const action$ = ActionsObservable.of(
           NotificationActions.updateNotification(successNotification)
       );


       const expectedOutputAction = NotificationActions.removeNotification(successNotification);
       epicUpdateNotification(action$, null)
        .subscribe((actualOutputActions) => {
            expect(actualOutputActions).toEqual(expectedOutputAction);
            done();
          }
        );

    });
  });


} );
