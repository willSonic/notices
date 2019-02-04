import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  UPDATE_NOTIFICATION
} from './notification_actions';


export const initialState = {
  notificationCollection:[],
};

export const notificationReducer = (state = initialState, action) => {
  const { payload = { } } = action;
  switch(action.type) {


    /**
    *  Creates a new Array with  array.concat(), by merging new payload Notification to the existing
    *  contents of notificationCollection
    */
     case ADD_NOTIFICATION:
         return {
            ...state,
            notificationCollection: state.notificationCollection.concat([payload])
         };

    /**
    *  Creates a new Array with  array.map(), to identify and update
    *   existing notification with payload Notification
    */
     case UPDATE_NOTIFICATION:
         return {
            ...state,
            notificationCollection: state.notificationCollection.map((notification)=> {
                return notification.id === payload.id?payload:notification;
            })
         };


    /**
    *  Creates a new Array with  array.filter(), to indentify and remove
    *   existing notification based on payload Notification
    */
    case REMOVE_NOTIFICATION:
         return {
            ...state,
            notificationCollection: state.notificationCollection.filter((notification)=> notification.id !== payload.id)
         };

    default:
      return state;
  }
};


export const getNotificationCollection = state => state.NotificationReducer.notificationCollection;

