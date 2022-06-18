import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={s.wrap}>
        {options.map(option => (
          <button
            className={s.btn}
            key={option}
            type="button"
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired
};
