import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, percentage } = this.props;
    return (
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.text}>
            {' '}
            Good:
            <span className={s.number}>{good}</span>
          </p>
        </li>
        <li className={s.item}>
          <p className={s.text}>
            {' '}
            Neutral:
            <span className={s.number}>{neutral}</span>
          </p>
        </li>
        <li className={s.item}>
          <p className={s.text}>
            {' '}
            Bad:
            <span className={s.number}>{bad}</span>
          </p>
        </li>
        <li className={s.item}>
          <p className={s.text}>
            {' '}
            Total:
            <span className={s.number}>{total}</span>
          </p>
        </li>
        <li className={s.item}>
          <p className={s.text}>
            {' '}
            Positive feedback:
            <span className={s.number}>{percentage}%</span>
          </p>
        </li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
