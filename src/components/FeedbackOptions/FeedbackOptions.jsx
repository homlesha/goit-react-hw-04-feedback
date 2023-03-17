import React from 'react';
import PropTypes from 'prop-types';

import { FormButtons, Buttons } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FormButtons>
      {options.map(option => {
        return (
          <Buttons key={option} name={option} onClick={onLeaveFeedback}>
            {option}
          </Buttons>
        );
      })}
    </FormButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
