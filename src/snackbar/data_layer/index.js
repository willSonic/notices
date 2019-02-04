/*
* Barrel file for easier imports
*
*/


import { combineEpics } from "redux-observable";
import { buildNotification } from "./notification_model_factory";
import {
  createSuccessNotification,
  createErrorNotification,
  addNotification,
  manualRemoveNotification,
  updateNotification,
  removeNotification,
  CREATE_SUCCESS_NOTIFICATION,
  CREATE_ERROR_NOTIFICATION,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  UPDATE_NOTIFICATION,
  MANUAL_REMOVE_NOTIFICATION
} from "./notification_actions";

import {
  epicCreateSuccessNotification,
  epicCreateErrorNotification,
  epicUpdateNotification,
  epicBeginManualRemoveNotification,
} from "./notification_epic";


import { notificationReducer  } from './notification_reducer';

import {
  getNotificationCollection,
} from "./notification_reducer";


export const NotificationReducer = notificationReducer;
export const NotificationGetters =  {
  getNotificationCollection
 };
export const NotificationActions ={
  createSuccessNotification,
  createErrorNotification,
  addNotification,
  manualRemoveNotification,
  updateNotification,
  removeNotification,
  CREATE_SUCCESS_NOTIFICATION,
  CREATE_ERROR_NOTIFICATION,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  UPDATE_NOTIFICATION,
  MANUAL_REMOVE_NOTIFICATION
};

export const notificationBuilder= buildNotification;

export const NotificationEpics = combineEpics(
  epicCreateSuccessNotification,
  epicCreateErrorNotification,
  epicUpdateNotification,
  epicBeginManualRemoveNotification,
);

