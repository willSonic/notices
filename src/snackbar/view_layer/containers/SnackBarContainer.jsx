import React, {Component} from 'react';
import {func, array} from "prop-types";
import { NotificationConnectServices } from "../../business_layer/NotificationConnector";
import NotificationDisplay from "../components/NotificationDisplayComponent"
import '../styles/snackbar.css';

class SnackBarContainer extends Component {
  static propTypes = {
    notificationCollection:array,
    removeNotification: func,
  };

  renderSnackbar(notificationCollection) {
    let className = 'global-snackbar';
    return (
        <div className={className}>
        {
            notificationCollection.map((item, index)=>
               <div key={index}>
                  {item.message}
               </div>)
        }
        </div>
    );
  }

  render() {
    const { notificationCollection } = this.props;
    return (
      <div>
        { notificationCollection&&notificationCollection.length>0 ? this.renderSnackbar(notificationCollection): null }
      </div>
    );
  }
}

export default NotificationConnectServices( SnackBarContainer);
