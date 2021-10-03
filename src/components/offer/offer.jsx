import React from 'react'
import './offer.scss'
import OfferSlider from '../offer-slider/offer-slider'
import OfferTitle from '../offer-title/offer-title'
import OfferTabs from '../offer-tabs/offer-tabs'
import { connect } from 'react-redux'

const Offer = (props) => {
  return (
    <div className="offer container">
      <div className="offer__head">
        <OfferSlider 
          images = {props.images}
        />
        <OfferTitle 
          head = {props.head}
        />
      </div>
      <OfferTabs
        options = {props.options} 
        reviews = {props.reviews}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
	return {
		images: state.images, 
    head: state.head,
    options: state.options,
    reviews: state.reviews,
	}
};

export default connect(mapStateToProps)(Offer);