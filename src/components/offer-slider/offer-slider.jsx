import React, {useState} from 'react'
import PropTypes from "prop-types";
import './offer-slider.scss'


const OfferSlider = (props) => {
  const {slides, thumbnails} = props.slider 
  const [photo, setPhoto] = useState(0);
  
  return (
    <div className="offer-slider">
      {slides.map((image, index) => (  
        <img 
          key={image + index}
          className={index !== photo ? "visually-hidden" : null}
          src={image}
          alt={"Фото объявления " + (index + 1)}
        />
      ))}
      <div className="offer-slider__driver">
        <button 
          disabled={photo === 0}
          onClick={() => setPhoto(photo - 1)}
          className="offer-slider__button offer-slider__button--prev" 
          aria-label="Назад">
          <svg width="55" height="55">
            <use xlinkHref="#arrow"/>
          </svg>
        </button>
        <div className="offer-slider__thumbnails">
          {thumbnails.map((image, index) => (  
            <img 
              key={image + index}
              src={image}
              alt={"Переход на фото " + (index + 1)}
            />
          ))}

        </div>
        <button 
          disabled={photo === (thumbnails.length - 1)}
          onClick={() => setPhoto(photo + 1)}
          className="offer-slider__button offer-slider__button--next"  
          aria-label="Вперед">
          <svg width="55" height="55">
            <use xlinkHref="#arrow"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

OfferSlider.propTypes = {
  slider: PropTypes.shape({
    thumbnails: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    slides: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired
}

export default OfferSlider