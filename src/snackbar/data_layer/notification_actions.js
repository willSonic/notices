export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const AUTO_REMOVE_NOTIFICATION = 'AUTO_REMOVE_NOTIFICATION';
export const MANUAL_REMOVE_NOTIFICATION = 'MANUAL_REMOVE_NOTIFICATION';


export function createNotification(payload) {
  return {
    type: CREATE_NOTIFICATION,
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
