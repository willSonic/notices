import React, {Component} from 'react';
import {func, object, string} from "prop-types";

export default class NotificationDisplay extends Component {

  render() {
    console.log(' --- this.props.children = ', this.props.children)
    return (
      <div className='snackbar-overlay' >
        {this.props.children}
      </div>
    );
  }
};
