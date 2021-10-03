const KeyOptions = {  
  transmission_type: "Трансмиссия",
  power: "Мощность двигателя, л.с.",
  engine: "Тип двигателя",
  type_of_drive: "Привод",
  volume: "Объем двигателя, л",
  torque: "Макс.крутящий момент",
  cylinders: "Количество цилиндров"
}

const Tabs = {
  options: "Характаристики",
  reviews: "Отзывы",
  contacts: "Контакты" 
}

const MAX_RATE = 5;

const ActionType = {
  OPEN_POPUP: 'openPopup',
  CLOSE_POPUP: 'closePopup',
  SENT_REVIEW: 'sentReview'
}

export {KeyOptions, MAX_RATE, Tabs, ActionType}