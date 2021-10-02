import React, { Component } from 'react'
import './new-review.scss'
import { MAX_RATE } from '../../const'

class NewReview extends Component {
  state = {        
    author: "",
    plus: "",
    minus: "",
    comment: "",
    rate: 0,
    time: "",
    popup: true
  }

  onChangeName = (evt) => {
    evt.preventDefault()   
    this.setState({
      author: evt.target.value 
    })
  }

  onChangePlus = (evt) => {
    evt.preventDefault()   
    this.setState({
      plus: evt.target.value 
    })
  }
  
  onChangeMinus = (evt) => {
    evt.preventDefault()   
    this.setState({
      minus: evt.target.value 
    })
  }
  
  onChangeRating = (evt) => {
    evt.preventDefault()
    const wrapper = evt.target.closest('.new-review__star-wrapper')
    if (!wrapper) return;   
    this.setState({
      rate: +wrapper.id 
    })
    console.log(wrapper.id)
  }
  
  onChangeComment = (evt) => {
    evt.preventDefault()   
    this.setState({
      comment: evt.target.value 
    })
  }
  
  render() {
    const rating = Array.apply(null, {length: MAX_RATE}).map(Number.call, Number)

    const escPressHandler = (evt) => {
      if (evt.key === 'Escape') {
        this.props.changePopupVisibility(false);
        document.removeEventListener('keydown', escPressHandler);
      }
    }

    document.addEventListener('keydown', escPressHandler);

    return (
      <div className={`new-review ${this.props.visible ? '' : 'visually-hidden'}`} onClick={(evt) => {
        if (!evt.target.closest('.new-review__wrapper')) {
          this.props.changePopupVisibility(false);
        }
      }}>      
        <div className="new-review__wrapper">
          <h2>Оставить отзыв</h2>
          <button 
            onClick={(evt) => {
              evt.preventDefault();
              console.log(1);
              this.props.changePopupVisibility(false);
            }}
            className="new-review__close" 
            aria-label="Закрыть окно"
          >          
            <svg width="15" height="15">
              <use xlinkHref="#close"></use>
            </svg>
            
          </button>
          <form 
            className="new-review__form"
            method="post"
            action="#"
          >
            <div className="new-review__form-wrapper">              
              <div className="new-review__section">
                <span>Пожалуйста, заполните поле </span>                
                <div className="new-review__input-wrapper">
                  <label htmlFor="name" className="visually-hidden">Имя</label>
                  <input className="new-review__input" type="text" id="mame" placeholder="Имя" onChange={this.onChangeName}/>  
                </div>        
                <label htmlFor="plus" className="visually-hidden">Достоинства</label>
                <input className="new-review__input" type="text" id="plus" placeholder="Достоинства" onChange={this.onChangePlus} />          
                <label htmlFor="minus" className="visually-hidden">Недостатки</label>
                <input className="new-review__input" type="text" id="minus" placeholder="Недостатки"  onChange={this.onChangeMinus} />
              </div>
              <div className="new-review__section">
                <div className="new-review__rating-area">
                  <span className="new-review__rating-text">Оцените товар: </span>
                  <div className="new-review__stars">
                    {rating.map((item, i) => (
                      <span className="new-review__star-wrapper" key={"new_star" + item} id={item + 1} onClick={this.onChangeRating}>
                        <input className="visually-hidden" type="radio" name="rating" value={(item + 1)} />
                        <label htmlFor={"star-" + (item + 1)} title={"Оценка «" + (item + 1) + "»"}>              
                        <svg tabIndex="0" className={`new-review__star ${i < this.state.rate ? "new-review__star--red" : "new-review__star--gray"}`} width="28" height="28">
                            <use xlinkHref="#star"></use>
                          </svg>
                        </label>
                      </span>
                    ))}
                  </div>
                </div>  
                <div className="new-review__input-wrapper"> 
                  <label htmlFor="review" className="visually-hidden">Комметарий</label>            
                  <textarea className="new-review__input new-review__input--comment" id="review" name="review" placeholder="Комментарий"
                    onChange={this.onChangeComment}
                  ></textarea>
                </div>   
              </div>
            </div>

            <button className="new-review__button">Оставить отзыв</button>

          </form>
        </div>
      </div>
    )
  }
}

export default NewReview