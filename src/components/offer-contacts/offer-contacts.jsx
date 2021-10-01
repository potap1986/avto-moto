import React from 'react'
import './offer-contacts.scss'
import Map from '../map/map'

const OfferContacts = () => {
  return (
    <div className="offer-contacts visually-hidden">
      <h2 className="visually-hidden">Контакты</h2>
      <div className="offer-contacts__block">        
        <div className="offer-contacts__item">
          <h3 className="offer-contacts__heading">Адрес</h3>
          <p className="offer-contacts__text offer-contacts__text--black">Санкт-Петербург, набережная&nbsp;реки&nbsp;Карповки,&nbsp;дом 5</p>
        </div>
        <div className="offer-contacts__item">
          <h3 className="offer-contacts__heading">Режим работы</h3>
          <p className="offer-contacts__text">Ежедневно, с 10:00 до 21:00</p>
        </div>
        <div className="offer-contacts__item">
          <h3 className="offer-contacts__heading">Телефон</h3>
          <a className="offer-contacts__text" href="tel:+78003335599">8 (800) 333-55-99</a>
        </div>
        <div className="offer-contacts__item">
          <h3 className="offer-contacts__heading">E-mail</h3>
          <a className="offer-contacts__text" href="mailto:info@avto-moto.ru?subject=Вопрос про автомобиль">info@avto-moto.ru</a>
        </div>
      </div>      
      <div className="offer-contacts__map">
        <h3 className="visually-hidden">Карта</h3>
        <Map />
      </div>
    </div>
  )
}

export default OfferContacts