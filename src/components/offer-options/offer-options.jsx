import React from 'react'
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
            <span>{props.options[keys]}</span>
          </li>
        ))}        
      </ul>      
    </div>
  )
}

export default OfferOptions