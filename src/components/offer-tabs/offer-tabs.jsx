import React, {useState} from 'react'
import OfferOptions from '../offer-options/offer-options'
import OfferReviews from '../offer-reviews/offer-reviews'
import OfferContacts from '../offer-contacts/offer-contacts'
import { Tabs } from '../../const'
import './offer-tabs.scss'

const OfferTabs = (props) => {
  
  const [activeTab, setActiveTab] = useState(0);
      
  const changeTabHandler = evt => {
    evt.preventDefault()    
    if (evt.target.id !== activeTab) { 
      const tabs = document.querySelectorAll('.offer-tabs__item')
      const prevActiveTab = document.getElementById(activeTab)
      setActiveTab(evt.target.id)
      prevActiveTab.className = 'offer__button'
      evt.target.className = `offer__button offer__button--active`
      tabs.forEach(tab => tab.classList.remove('offer-tabs__item--active'))
      tabs[evt.target.id].classList.add('offer-tabs__item--active');
    } 
  }

  const createTabs = (activeTab) => {
    const tabButtons = Object.entries(Tabs)
    return tabButtons.map(([keys, values], index) => (
      <button 
        key={keys + index}
        onClick={changeTabHandler}
        id={index} 
        className={`offer__button ${index === activeTab ? `offer__button--active` : ``}`}
      >
        {values}
      </button>
    ))
   }


  return (
    
    <div className="offer-tabs">
      <div className="offer-tabs__nav">
        {createTabs(activeTab)}
      </div>
      <div className="offer-tabs__content">
        <OfferOptions options = {props.options} classTab = " offer-tabs__item offer-tabs__item--active"/>
        <OfferReviews reviews = {props.reviews} classTab = " offer-tabs__item" changePopupVisibility = {props.changePopupVisibility} addReview={props.addReview}/>
        <OfferContacts classTab = " offer-tabs__item" />
      </div>
    </div>
  )
}

export default OfferTabs