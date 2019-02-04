export const POSTING_TRANSFORM_NOTIFICATION = 'POSTING_TRANSFORM_NOTIFICATION';
export const CREATE_SUCCESS_NOTIFICATION = 'CREATE_SUCCESS_NOTIFICATION';
export const CREATE_ERROR_NOTIFICATION = 'CREATE_ERROR_NOTIFICATION';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const MANUAL_REMOVE_NOTIFICATION = 'MANUAL_REMOVE_NOTIFICATION';

export function postingNotification(payload){
  return {
    type: POSTING_TRANSFORM_NOTIFICATION,
    payload
  }
}

export function createSuccessNotification(    payload
) {
  return {
    type: CREATE_SUCCESS_NOTIFICATION,
    payload
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

export function updateNotification(payload){
  return {
    type: UPDATE_NOTIFICATION,
    payload
  }

}

export function removeNotification(payload){
  return {
    type: REMOVE_NOTIFICATION,
    payload
  }
}

export function manualRemoveNotification(payload) {
  return {
    type: MANUAL_REMOVE_NOTIFICATION,
    payload
  }
}
