import React, {Component} from 'react';
import {object, func} from "prop-types";

import { NOTIFICATION_TYPES} from "../../business_layer/notification_consts";

export default class NotificationDisplay extends Component {
  static propTypes = {
    notification:object.isRequired,
    closeNotification:func.isRequired,
  }


  render() {
   const { notification, closeNotification } = this.props;
   let classType ='notification-item__loading';
   if(notification.type ===  NOTIFICATION_TYPES.ERROR){
      classType ='notification-item__error';
   }else if(notification.type === NOTIFICATION_TYPES.SUCCESS){
      classType ='notification-item__success';
   }
   return (
      <div className={`notification-item ${classType}`} >
        <p>
          {notification.message}
          <span>
             <i className="material-icons mdc-button__icon"
                onClick={()=>closeNotification(notification)}>close</i>
          </span>
       </p>
       <p>
           {`${notification.transformType} : ${notification.inputData} `}
       </p>
      </div>
    );
  }
};
