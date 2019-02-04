import{
   NotificationReducer,
   NotificationGetters,
   NotificationActions
} from "../index";

import {
  notificationBuilder
} from "../index";

import {
  NOTIFICATION_TYPES,
  NOTIFICATION_MESSAGE,
} from "../../business_layer/notification_consts";
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


describe('NotificationReducer', () => {

    describe('initial NotificationReducer state', () => {
        it('sets initial state', () => {
          let action = { type: 'UNDEFINED_TYPE' };
          let state = NotificationReducer(undefined, action);
          expect(
            state.notificationCollection
          ).toEqual(
            []
          );
        });
    });

    describe('ADD_NOTIFICATION and NotificationGetters', () => {
        const action = { type:NotificationActions.ADD_NOTIFICATION, payload:newNotfication};
        const state =  NotificationReducer(initialState, action);

        it('getNotificationCollection should return array with single notification', () => {
            expect(NotificationGetters.getNotificationCollection({ NotificationReducer: state })).toEqual([newNotfication]);
        });

        expect(NotificationGetters.getNotificationCollection({ NotificationReducer: state })[0].id).not.toEqual(undefined);
        expect(NotificationGetters.getNotificationCollection({ NotificationReducer: state })[0].inputData).toBe(input);
    });

    describe('UPDATE_NOTIFICATION', () => {
        const action = { type:NotificationActions.ADD_NOTIFICATION, payload:newNotfication};
        let currentState =  NotificationReducer(initialState, action);
        const updateNotification ={
            id:newNotfication.id,
            message:NOTIFICATION_MESSAGE.SUCCESS,
            inputData:input,
            transformType:mode+'Transform',
            type: NOTIFICATION_TYPES.SUCCESS,
        };

        it('should return notificationCollection changed Notification ', () => {

            expect( currentState.notificationCollection[0].type)
                .toEqual( NOTIFICATION_TYPES.LOADING );

            const action = { type:NotificationActions.UPDATE_NOTIFICATION, payload:updateNotification};

            currentState =  NotificationReducer(currentState, action);

            expect( currentState.notificationCollection[0].type )
                .toEqual( NOTIFICATION_TYPES.SUCCESS);
        });
    });

    describe('REMOVE_NOTIFICATION', () => {

        const action = { type:NotificationActions.ADD_NOTIFICATION, payload:newNotfication};
        let currentState =  NotificationReducer(initialState, action);

        it('should return notificationCollection array ', () => {

            expect( currentState.notificationCollection[0].type)
                .toEqual( NOTIFICATION_TYPES.LOADING );

            const action = { type:NotificationActions.REMOVE_NOTIFICATION, payload:newNotfication};

            currentState =  NotificationReducer(currentState, action);

            expect( currentState.notificationCollection )
                .toEqual([]);
        });

    });


});
