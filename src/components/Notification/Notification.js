import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default class Notification extends Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        <p className={s.notification}>{message}</p>
      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
