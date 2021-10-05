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

export {KeyOptions, MAX_RATE, Tabs, ActionType}