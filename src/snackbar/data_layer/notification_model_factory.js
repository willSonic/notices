import uuid from 'uuid';


/**
* Simple Notification Model construct.
* @param action$ statusCode:Number as String  http status
* @param action$ message:String  message to display
* @param action$ inputData:String set to server for transformation
* @param action$ type:String represent state/type of Notification LOADING | SUCCESS | ERROR
* @param action$ transformType:String type of Request upper or lower case
* @param action$ id:String to identify specific notification
* @return {ActionsObservable} - dispatch to Update Notification in  Notification Reducer
*/

export const buildNotification = ({
  statusCode='',
  message='' ,
  inputData='',
  type='',
  transformType='',
  id = uuid.v4()
} = {}) => ({
  statusCode,
  transformType,
  message,
  inputData,
  type,
  id
});
