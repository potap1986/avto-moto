import React from 'react'
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
      <button>Оставить заявку</button>
      <button>В кредит от 11 000 ₽</button>
    </div>
  )
}

export default OfferTitle