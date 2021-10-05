const KeyOptions = {  
  TRANSMISSION_TYPE: "Трансмиссия",
  POWER: "Мощность двигателя, л.с.",
  ENGINE: "Тип двигателя",
  TYPE_OF_DRIVE: "Привод",
  VOLUME: "Объем двигателя, л",
  TORQUE: "Макс.крутящий момент",
  CYLINDERS: "Количество цилиндров"
}

const Tabs = {
  OPTIONS: "Характаристики",
  REVIEWS: "Отзывы",
  CONTACTS: "Контакты" 
}

const MAX_RATE = 5;

const ActionType = {
  OPEN_POPUP: 'openPopup',
  CLOSE_POPUP: 'closePopup',
  SENT_REVIEW: 'sentReview'
}

const Time = {
  MS_IN_SECOND: 1000,
  MS_IN_MINUTE: 60000,
}

const TimeWords = {
  NOW: 'прямо сейчас',
  SEC: ' сек. назад',
  MIN: ' мин. назад',

}

export {KeyOptions, MAX_RATE, Tabs, ActionType, Time, TimeWords}