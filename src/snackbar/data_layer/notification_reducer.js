import {
  ADD_NOTIFICATION,
  AUTO_REMOVE_NOTIFICATION,
  MANUAL_REMOVE_NOTIFICATION,
} from './notification_actions';


export const initialState = {
  notificationCollection:[],
};

export const notifcationReducer = (state = initialState, action) => {
  const { payload = { } } = action;
  switch(action.type) {
     case ADD_NOTIFICATION:
         return {
            ...state,
            notificationCollection: state.notificationCollection.concat(payload)
         }

    case MANUAL_REMOVE_NOTIFICATION:
    case AUTO_REMOVE_NOTIFICATION:
         return {
            ...state,
            notificationCollection:notificationCollection.filter((notification)=> notification.id !== payload.id)
         }


    default:
      return state;
  }
};


export const getNotificationCollection = state => state.notifcationReducer.notificationCollection;

