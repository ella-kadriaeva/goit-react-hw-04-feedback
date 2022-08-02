import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({
  onGood,
  onNeutral,
  onBad,
  total,
  positiv,
}) {
  return (
    <ul className={css.statisticsBlock}>
      <li className={css.item}>Good: {onGood}</li>
      <li className={css.item}>Neutral: {onNeutral}</li>
      <li className={css.item}>Bad: {onBad}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>Positive feedback: {positiv}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiv: PropTypes.number,
};
