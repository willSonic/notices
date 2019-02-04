import { connect } from 'react-redux';
import { NotificationGetters, NotificationActions } from "../data_layer";


const mapStateToProps = state =>({
  notificationCollection: NotificationGetters.getNotificationCollection(state),
});


const mapDispatchToProps = {
  removeNotification:NotificationActions.manualRemoveNotification,
}

/*
*  Separating Notification Connection services from visual layer in case
*  other containers in visual layer want access
*/

export const NotificationConnectServices = ( containerToConnect )=>{
   return  connect(
      mapStateToProps,
      mapDispatchToProps
    )(containerToConnect);
};
