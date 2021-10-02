import React, {useState} from 'react'
import './offer-slider.scss'


const OfferSlider = (props) => {
  const {max, min} = props.images 
  const [photo, setPhoto] = useState(0);
  
  return (
    <div className="offer-slider">
      {max.map((image, index) => (  
        <img 
          key={image + index}
          className={index !== photo ? "visually-hidden" : null}
          src={image}
          alt={"Фото объявления " + (index + 1)}
        />
      ))}
      <div className="offer-slider__driwer">
        <button 
          disabled={photo === 0}
          onClick={() => setPhoto(photo - 1)}
          className="offer-slider__button" 
          aria-label="Назад">
          <svg width="55" height="55">
            <use xlinkHref="#arrow"/>
          </svg>
        </button>
        {min.map((image, index) => (  
          <img 
            key={image + index}
            src={image}
            alt={"Переход на фото " + (index + 1)}
          />
        ))}
        <button 
          disabled={photo === (min.length - 1)}
          onClick={() => setPhoto(photo + 1)}
          className="offer-slider__button"  
          aria-label="Вперед">
          <svg width="55" height="55">
            <use xlinkHref="#arrow"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default OfferSlider