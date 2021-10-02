import React from 'react'
import './offer-reviews.scss'
import { MAX_RATE } from '../../const'

const OfferReviews = (props) => {

  const rating = Array.apply(null, {length: MAX_RATE}).map(Number.call, Number)

  return (
    <div className={"offer-reviews" + props.classTab}>
      <h2 className="visually-hidden">Отзывы</h2>
      <button  
        className="offer-reviews__button"
        onClick={() => {
          props.changePopupVisibility(true);
        }}
      >
        Оставить отзыв
      </button>
      <ul className="offer-reviews__list">
        {props.reviews.map((review, index) => (          
          <li
            className="offer-reviews__item"
            key={"author" + index}
          >
            <h3>{review.author}</h3>
            <div className="offer-reviews__preferenses offer-reviews__preferenses--plus">
              <h4>Достоинства</h4>
              <p>{review.plus}</p>
            </div>
            <div className="offer-reviews__preferenses offer-reviews__preferenses--minus">
              <h4>Недостатки</h4>
              <p>{review.minus}</p>
            </div>
            <div className="offer-reviews__comment">
              <h4>Коммантарий</h4>
              <p>{review.comment}</p>
            </div>
            <div className="offer-reviews__rating">
              {rating.map((item) => (
                <svg 
                  key={review.author + item} 
                  className={"offer-reviews__star " + (item < review.rate ? "offer-reviews__star--red" : "offer-reviews__star--gray")} 
                  width="17" 
                  height="17"
                >
                  <use xlinkHref="#star" />
                </svg>
              ))}
              <span>Советует</span>
            </div>
            <div className="offer-reviews__other">
              <span>{review.time}</span>
              <a href="mail.ru">Ответить</a>
            </div>
          </li>
        ))}
      </ul>

    </div>   

  )
}

export default OfferReviews