import {
  ADD_NOTIFICATION,
  REMOVING_NOTIFICATION,
  UPDATE_NOTIFICATION
} from './notification_actions';


export const initialState = {
  notificationCollection:[],
};

export const notificationReducer = (state = initialState, action) => {
  const { payload = { } } = action;
  switch(action.type) {

     case ADD_NOTIFICATION:
         return {
            ...state,
            notificationCollection: state.notificationCollection.concat(payload)
         };
     case UPDATE_NOTIFICATION:
         return {
            ...state,
            notificationCollection: state.notificationCollection.map((notification)=> {
                return notification.id === payload.id?payload:notification;
            })
         };

    case REMOVING_NOTIFICATION:
         return {
            ...state,
            notificationCollection: state.notificationCollection.filter((notification)=> notification.id !== payload.id)
         };

    default:
      return state;
  }
};


export const getNotificationCollection = state => state.NotificationReducer.notificationCollection;

