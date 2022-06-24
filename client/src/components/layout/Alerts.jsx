import React, { useContext } from 'react';
import { AlertContext } from '../../context/alert/AlertContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div
        key={alert.id}
        className='px-3 py-3 text-white text-center bg-red-500 shadow-md'
      >
        <FontAwesomeIcon icon={faInfoCircle} /> {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
