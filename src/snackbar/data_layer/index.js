import { combineEpics } from "redux-observable";
import {
  createSuccessNotification,
  createErrorNotification,
  addNotification,
  autoRemoveNotification,
  manualRemoveNotification,
  CREATE_SUCCESS_NOTIFICATION,
  CREATE_ERROR_NOTIFICATION,
  ADD_NOTIFICATION,
  AUTO_REMOVE_NOTIFICATION,
  MANUAL_REMOVE_NOTIFICATION,
} from "./notification_actions";

import {
  epicCreateSuccessNotification,
  epicCreateErrorNotification,
} from "./notification_epic";


import { notificationReducer  } from './notification_reducer';

import {
  getNotificationCollection
} from "./notification_reducer";


export const NotificationReducer = notificationReducer;
export const NotificationGetters =  { getNotificationCollection };
export const NotificationActions ={
  createSuccessNotification,
  createErrorNotification,
  addNotification,
  autoRemoveNotification,
  manualRemoveNotification,
  CREATE_SUCCESS_NOTIFICATION,
  CREATE_ERROR_NOTIFICATION,
  ADD_NOTIFICATION,
  AUTO_REMOVE_NOTIFICATION,
  MANUAL_REMOVE_NOTIFICATION,
};


export const NotificationEpics = combineEpics(
  epicCreateSuccessNotification,
  epicCreateErrorNotification
  );

