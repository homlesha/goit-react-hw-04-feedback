import React from 'react';
import PropTypes from 'prop-types';
import { StatisticCont } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivPercentage }) => {
  return (
    <StatisticCont>
      <span>{`Good: ${good}`}</span>
      <span>{`Neutral: ${neutral}`}</span>
      <span>{`Bad: ${bad}`}</span>
      <span>{`Total: ${total}`}</span>
      <span>{`Positive feedback: ${positivPercentage}%`}</span>


    </StatisticCont>
  );
};
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivPercentage: PropTypes.number.isRequired,
  };

export default Statistics;
