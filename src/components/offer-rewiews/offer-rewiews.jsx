import React from 'react'
import './offer-rewiews.scss'
import { MAX_RATE } from '../../const'

const OfferRewiews = (props) => {

  const rating = Array.apply(null, {length: MAX_RATE}).map(Number.call, Number)

  return (
    <div className="offer-rewiews">
      <h2 className="visually-hidden">Отзывы</h2>
      <button  
        className="offer-rewiews__button"
      >
        Оставить отзыв
      </button>
      <ul className="offer-rewiews__list">
        {props.rewiews.map((rewiew, index) => (          
          <li
            className="offer-rewiews__item"
            key={"author" + index}
          >
            <h3>{rewiew.author}</h3>
            <div className="offer-rewiews__preferenses offer-rewiews__preferenses--plus">
              <h4>Достоинства</h4>
              <p>{rewiew.plus}</p>
            </div>
            <div className="offer-rewiews__preferenses offer-rewiews__preferenses--minus">
              <h4>Недостатки</h4>
              <p>{rewiew.minus}</p>
            </div>
            <div className="offer-rewiews__comment">
              <h4>Коммантарий</h4>
              <p>{rewiew.comment}</p>
            </div>
            <div className="offer-rewiews__rating">
              {rating.map((item) => (
                <svg 
                  key={rewiew.author + item} 
                  className={"offer-rewiews__star " + (item < rewiew.rate ? "offer-rewiews__star--red" : "offer-rewiews__star--gray")} 
                  width="17" 
                  height="17"
                >
                  <use xlinkHref="#star" />
                </svg>
              ))}
              <span>Советует</span>
            </div>
            <div className="offer-rewiews__other">
              <span>{rewiew.time}</span>
              <a href="mail.ru">Ответить</a>
            </div>
          </li>
        ))}
      </ul>

    </div>   

  )
}

export default OfferRewiews