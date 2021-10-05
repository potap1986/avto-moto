import React from 'react'
import PropTypes from "prop-types";
import './offer-options.scss'
import { KeyOptions } from '../../const'

const OfferOptions = (props) => {
  const options = Object.entries(KeyOptions);

  return (
    <div className={"offer-options" + props.classTab}>
      <h2 className="visually-hidden">Характеристики</h2>
      <ul className="offer-options__list">
        {options.map(([keys, value], index) => (
          <li
            className="offer-options__item"
            key={keys + index}
          >
            <p>{value}</p>
            <span>{props.options[keys.toLowerCase()]}</span>
          </li>
        ))}        
      </ul>      
    </div>
  )
}

OfferOptions.propTypes = {
  classTab: PropTypes.string.isRequired,
  options: PropTypes.shape({
		transmission_type: PropTypes.string.isRequired,
		power: PropTypes.string.isRequired,
		engine: PropTypes.string.isRequired,
		type_of_drive: PropTypes.string.isRequired,
		volume: PropTypes.string.isRequired,
		torque: PropTypes.string.isRequired,
		cylinders: PropTypes.string.isRequired
  }).isRequired
}

export default OfferOptions