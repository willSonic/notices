import React, {Component} from 'react';
import {func, array} from "prop-types";
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import { NotificationConnectServices } from "../../business_layer/NotificationConnector";
import NotificationDisplay from "../components/NotificationDisplayComponent";
import '../styles/snackbar.css';

class SnackBarContainer extends Component {
  static propTypes = {
    notificationCollection:array.isRequired,
    removeNotification: func.isRequired,
  };



  renderSnackbar =()=> {
    const { notificationCollection, removeNotification } = this.props;
    return (
      <div className="notification-group">
        <TransitionGroup className="notification-group__list">
            {
                notificationCollection.map((item, index)=>{
                    return (
                        <CSSTransition
                         key={index}
                         timeout={ 500 }
                         classNames="move"
                         >
                            <NotificationDisplay
                                key={index}
                                notification={item}
                                closeNotification={removeNotification}/>
                        </CSSTransition>
                    )
                })
            }
        </TransitionGroup>
      </div>
    );
  };

  render() {

    return  <div className="snackbar-overlay">
              {  this.renderSnackbar() }
            </div>

  }
}

export default NotificationConnectServices( SnackBarContainer);
