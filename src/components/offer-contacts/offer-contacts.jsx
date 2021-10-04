import React, { Suspense }  from 'react'
import PropTypes from "prop-types";
import './offer-contacts.scss'
const MapContacts = React.lazy(() => import('../map-contacts/map-contacts'));

const OfferContacts = (props) => {
  return (
    <div className={"offer-contacts" + props.classTab}>
      <div className="offer-contacts__container">
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
            <a className="offer-contacts__text" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
          </div>
        </div>      
        <div className="offer-contacts__map">
          <h3 className="visually-hidden">Карта</h3>
          <Suspense  fallback={<div>Загрузка...</div>}>
            <MapContacts />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

OfferContacts.propTypes = {
  classTab: PropTypes.string.isRequired
}

export default OfferContacts