import React from 'react'
import PropTypes from "prop-types";
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
          slider = {props.slider}
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

Offer.propTypes = {
  slider: PropTypes.shape({
    slides: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    thumbnails: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired,
  head: PropTypes.shape({
		title: PropTypes.string.isRequired,
		options: PropTypes.shape({        
			engine: PropTypes.string.isRequired,
			transmission: PropTypes.string.isRequired,
			power: PropTypes.string.isRequired,
			volume: PropTypes.string.isRequired
		}).isRequired,
		sale_price: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired
  }).isRequired,
  options: PropTypes.shape({
		transmission_type: PropTypes.string.isRequired,
		power: PropTypes.string.isRequired,
		engine: PropTypes.string.isRequired,
		type_of_drive: PropTypes.string.isRequired,
		volume: PropTypes.string.isRequired,
		torque: PropTypes.string.isRequired,
		cylinders: PropTypes.string.isRequired
  }).isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      plus: PropTypes.string.isRequired,
      minus: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      time:  PropTypes.instanceOf(Date).isRequired
    }).isRequired
  ).isRequired
}

const mapStateToProps = (state) => {
	return {
		slider: state.slider, 
    head: state.head,
    options: state.options,
    reviews: state.reviews,
	}
};

export default connect(mapStateToProps)(Offer);