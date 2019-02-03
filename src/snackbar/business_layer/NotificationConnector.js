import { connect } from 'react-redux';
import { NotificationGetters, NotificationActions } from "../data_layer";


const mapStateToProps = state =>({
  notificationCollection: NotificationGetters.getNotificationCollection(state),
});


const mapDispatchToProps = {
  removeNotification:NotificationActions.manualRemoveNotification,
}


export const NotificationConnectServices = ( containerToConnect )=>{
   return  connect(
      mapStateToProps,
      mapDispatchToProps
    )(containerToConnect);
};
