export const CREATE_SUCCESS_NOTIFICATION = 'CREATE_SUCCESS_NOTIFICATION';
export const CREATE_ERROR_NOTIFICATION = 'CREATE_ERROR_NOTIFICATION';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const AUTO_REMOVE_NOTIFICATION = 'AUTO_REMOVE_NOTIFICATION';
export const MANUAL_REMOVE_NOTIFICATION = 'MANUAL_REMOVE_NOTIFICATION';

export function createSuccessNotification() {
  return {
    type: CREATE_SUCCESS_NOTIFICATION
  }
}
export function createErrorNotification(payload) {
  return {
    type: CREATE_ERROR_NOTIFICATION,
    payload
  }
}

export function addNotification(payload) {
  return {
    type: ADD_NOTIFICATION,
    payload
  }
}

export function autoRemoveNotification(payload) {
  return {
    type: AUTO_REMOVE_NOTIFICATION,
    payload
  }
}

export function manualRemoveNotification(payload) {
  return {
    type: MANUAL_REMOVE_NOTIFICATION,
    payload
  }
}
