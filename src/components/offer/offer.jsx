import React, { Component } from 'react'
import './offer.scss'
import OfferSlider from '../offer-slider/offer-slider'
import OfferTitle from '../offer-title/offer-title'
import OfferOptions from '../offer-options/offer-options'
import OfferRewiews from '../offer-rewiews/offer-rewiews'
import OfferContacts from '../offer-contacts/offer-contacts'

class Offer extends Component {
  state = {
    images: {
      max: [
        "../image/desktop-slide1.jpg",
        "../image/desktop-slide2.jpg",
        "../image/desktop-slide3.jpg"
      ],
      min: [
        "../image/nav-slide1.jpg",
        "../image/nav-slide2.jpg",
        "../image/nav-slide3.jpg"
      ]
    },
    head: {
      title: "Марпех 11",
      options: {        
        engine: "бензин",
        transmission: "механика",
        power: "100 л.с.",
        volume: "1.4 л"
      },
      sale_price: "2 300 000 ₽",
      price: "2  400 000 ₽"
    },
    options: {
      transmission_type: "Роботизированная",
      power: "249",
      engine: "Бензиновый",
      type_of_drive: "Полный",
      volume: "2.4",
      torque: "370/4500",
      cylinders: "4"
    },
    rewiews: [
      {
        author: "Борис Иванов",
        plus: "мощность, внешний вид",
        minus: "Слабые тормозные колодки (пришлось заменить)",
        comment: "Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.",
        rate: 3,
        time: "1 минуту назад"
      },
      {
        author: "Марсель Исмагилов",
        plus: "Cтиль, комфорт, управляемость",
        minus: "Дорогой ремонт и обслуживание",
        comment: "Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.",
        rate: 3,
        time: "1 минуту назад"
      },
    ]
  }

  render() {    
    return (
      <div className="offer container">
        <div className="offer__head">
          <OfferSlider 
            images = {this.state.images}
          />
          <OfferTitle 
            head = {this.state.head}
          />
        </div>
        <div className="offer__body">
          <div className="offer__nav">
            <button className="offer__button">Характеристики</button>
            <button className="offer__button offer__button--active">Отзывы</button>
            <button className="offer__button">Контакты</button>
          </div>
          <OfferOptions 
            options = {this.state.options}
          />
          <OfferRewiews
            rewiews = {this.state.rewiews}
          />
          <OfferContacts />
        </div>
      </div>
    )
  }
}

export default Offer