import React from 'react'
import './offer-options.scss'
import { KEY_OPTIONS } from '../../const'

const OfferOptions = (props) => {
  const options = Object.entries(KEY_OPTIONS);

  return (
    <div className="offer-options">
      <h2 className="visually-hidden">Характеристики</h2>
      <ul>
        {options.map(([keys, value], index) => (
          <li key={keys + index}>
            <p>{value}</p>
            <span>{props.options[keys]}</span>
          </li>
        ))}        
      </ul>      
    </div>
  )
}

export default OfferOptions