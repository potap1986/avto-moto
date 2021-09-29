import React from 'react'
import './offer-rewiews.scss'

const OfferRewiews = (props) => {

  return (
    <div className="offer-rewiews">
      <h2 className="visually-hidden">Отзывы</h2>
      <button>Оставить отзыв</button>
      <ul>
        {props.rewiews.map((rewiew, index) => (          
          <li
            key={"author" + index}
          >
            <h3>{rewiew.author}</h3>
            <div>
              <h4>Достоинства</h4>
              <p>{rewiew.plus}</p>
            </div>
            <div>
              <h4>Недостатки</h4>
              <p>{rewiew.minus}</p>
            </div>
            <div>
              <h4>Коммантарий</h4>
              <p>{rewiew.comment}</p>
            </div>
            <div>
              <span>{rewiew.rate}</span>
              <span>Советует</span>
            </div>
            <div>
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