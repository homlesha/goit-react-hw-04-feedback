import React from 'react'
import PropTypes from 'prop-types';


const Notification = ({notifi}) => {
  return (
    <div>{notifi}</div>
  )
}

Notification.propTypes = {
    notifi: PropTypes.string.isRequired,
  };

export default Notification