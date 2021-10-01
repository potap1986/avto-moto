import React from 'react'
import './new-rewiew.scss'

const NewRewiew = () => {
  return (
    <div className="new-rewiew">      
      <div className="new-rewiew__wrapper">
        <h2>Оставить отзыв</h2>
        <button className="new-rewiew__close visually-hidden">Закрыть окно</button>
        <form>
          <div>
            <label htmlFor="name" className="visually-hidden">Имя</label>
            <input type="text" id="mame" placeholder="Имя" />
          
            <label htmlFor="plus" className="visually-hidden">Достоинства</label>
            <input type="text" id="plus" placeholder="Достоинства" />
          
            <label htmlFor="minus" className="visually-hidden">Недостатки</label>
            <input type="text" id="minus" placeholder="Недостатки" />

          </div>



          <div className="new-review__rating">
            <input className="new-review-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
              // onChange={onInputChange}
            />
            <label htmlFor="5-stars" className="reviews__rating-label" title="perfect">
              <svg className="new-review__star" width="33" height="33">
                <use xlinkHref="#star"></use>
              </svg>
            </label>

            <input className="new-review__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
              // onChange={onInputChange}
            />
            <label htmlFor="4-stars" className="new-review__rating-label" title="good">
              <svg className="new-review__star" width="33" height="33">
                <use xlinkHref="#star"></use>
              </svg>
            </label>

            <input className="new-review__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
              // onChange={onInputChange}
            />
            <label htmlFor="3-stars" className="new-review__rating-label" title="not bad">
              <svg className="new-review__star" width="33" height="33">
                <use xlinkHref="#star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
              // onChange={onInputChange}
            />
            <label htmlFor="2-stars" className="new-review__rating-label" title="badly">
              <svg className="new-review__star" width="33" height="33">
                <use xlinkHref="#star"></use>
              </svg>
            </label>

            <input className="new-review__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
              // onChange={onInputChange}
              // ref={markRef}
            />
            <label htmlFor="1-star" className="new-review__rating-label" title="terribly">
              <svg className="new-review__star" width="33" height="33">
                <use xlinkHref="#star"></use>
              </svg>
            </label>
          </div>
                
          <textarea className="new-review__textarea" id="review" name="review" placeholder="Комментарий"
            // onChange={onInputChange}
            // ref={textRef}
          ></textarea>

          <button className="new-rewiew__button">Оставить отзыв</button>

        </form>
      </div>
    </div>
  )
}

export default NewRewiew