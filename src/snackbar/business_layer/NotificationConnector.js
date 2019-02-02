import { connect } from 'react-redux';
import { NotificationGetters, NotificationActions } from "../data_layer";
import SnackBarContainer  from "../view_layer/containers/SnackBarContainer"


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
