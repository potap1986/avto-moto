import React from 'react'
import PropTypes from "prop-types";
import './offer-title.scss'

const OfferTitle = (props) => {
  const {title, options, sale_price, price} = props.head  
  const details = Object.entries(options);
  
  return (
    <div className="offer-title">
      <h1>{title}</h1>
      <ul className="offer-title__options">
        {details.map(([keys, value], index) => (
          <li className="offer-title__options-item" key={keys + index}>            
            <svg width="30" height="30">
              <use xlinkHref={"#"+ keys}/>
            </svg>
            <p>{value}</p>
          </li>
        ))}
      </ul>
      <div className="offer-title__price">
        <p>{sale_price}</p> 
        <span>{price}</span>
      </div>
      <button 
        className="offer-title__button offer-title__button--primary"
      >
        Оставить заявку
      </button>
      <button 
        className="offer-title__button offer-title__button--secondary"
      >
        В кредит от 11 000 ₽
      </button>
    </div>
  )
}

OfferTitle.propTypes = {
  head: PropTypes.shape({
		title: PropTypes.string.isRequired,
		options: PropTypes.shape({        
			engine: PropTypes.string.isRequired,
			transmission: PropTypes.string.isRequired,
			power: PropTypes.string.isRequired,
			volume: PropTypes.string.isRequired
		}).isRequired,
		sale_price: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired
  }).isRequired
}

export default OfferTitle