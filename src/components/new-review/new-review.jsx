import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types";
import './new-review.scss'
import { MAX_RATE } from '../../const'
import ActionCreator from '../../store/actions'
import {connect} from 'react-redux'
import FocusTrap from 'focus-trap-react';
class NewReview extends Component {
  state = {        
    author: localStorage.getItem('author') ? localStorage.getItem('author') : '',
    plus: localStorage.getItem('plus') ? localStorage.getItem('plus') : '',
    minus: localStorage.getItem('minus') ? localStorage.getItem('minus') : '',
    comment: localStorage.getItem('comment') ? localStorage.getItem('comment') : '',
    rate: localStorage.getItem('rate') ? +localStorage.getItem('rate') : 0,
    time: null,
  }

  handleNameChange = (evt) => {
    evt.preventDefault()   
    this.setState({
      author: evt.target.value 
    })
  }

  handlePlusChange = (evt) => {
    evt.preventDefault()   
    this.setState({
      plus: evt.target.value 
    })
  }
  
  handleMinusChange = (evt) => {
    evt.preventDefault()   
    this.setState({
      minus: evt.target.value 
    })
  }
  
  handleRatingChange = (evt) => {
    if (evt.type === 'keydown' && evt.code !== 'Space') return;
    const value = evt.target.closest('label').htmlFor.slice(-1);
    this.setState({
      rate: +value 
    })
  }
  
  handleCommentChange = (evt) => {
    evt.preventDefault()   
    this.setState({
      comment: evt.target.value 
    })
  }

  handleReviewAdd(evt) {
    evt.preventDefault();
    if ((this.state.author.trim() !== '') && (this.state.comment.trim() !== '')) {
      const review = {
        author: this.state.author,
        plus: this.state.plus,
        minus: this.state.minus,
        comment: this.state.comment,
        rate: this.state.rate,
        time: new Date(),
      };
      this.props.onReviewAdd(review)
      this.props.onPopupClose();
      this.setLocalStorage();
    }
  }

  setLocalStorage() {
    localStorage.setItem('author', this.state.author)
    localStorage.setItem('plus', this.state.plus)
    localStorage.setItem('minus', this.state.minus)
    localStorage.setItem('comment', this.state.comment)
    localStorage.setItem('rate', this.state.rate)
  }

  componentDidMount() {
    this.authorInput.focus();
  }
  
  render() {
    const stars = Array.apply(null, {length: MAX_RATE}).map(Number.call, Number)

    const escPressHandler = (evt) => {
      if (evt.key === 'Escape') {
        this.props.onPopupClose();
        document.removeEventListener('keydown', escPressHandler);
      }
    }

    document.addEventListener('keydown', escPressHandler);

    return (
      <FocusTrap>
        <div className={`new-review ${this.props.visible ? '' : 'visually-hidden'}`} onClick={(evt) => {
          if (!evt.target.closest('.new-review__wrapper')) {
            this.props.onPopupClose();
          }
        }}>      
          <div className="new-review__wrapper">
            <h2>Оставить отзыв</h2>
            <button 
              onClick={this.props.onPopupClose}
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
                    <input className="new-review__input" type="text" id="mame" placeholder="Имя" onChange={this.handleNameChange} value={this.state.author} ref={(input) => {this.authorInput = input}}/>  
                  </div>        
                  <label htmlFor="plus" className="visually-hidden">Достоинства</label>
                  <input className="new-review__input" type="text" id="plus" placeholder="Достоинства" onChange={this.handlePlusChange} value={this.state.plus}/>          
                  <label htmlFor="minus" className="visually-hidden">Недостатки</label>
                  <input className="new-review__input" type="text" id="minus" placeholder="Недостатки"  onChange={this.handleMinusChange}  value={this.state.minus}/>
                </div>
                <div className="new-review__section">
                  <div className="new-review__rating-area">
                    <span className="new-review__rating-text">Оцените товар: </span>
                    <div className={`new-review__stars ${ this.state.rate === 0 ? 'new-review__stars--empty' : ''}`}>
                      {stars.map((item, i) => (
                        <Fragment key={"new_star" + item}>
                          <label tabIndex="0" className="new-review__star-label" htmlFor={"star-" + (item + 1)} title={"Оценка «" + (item + 1) + "»"} onClick={this.handleRatingChange} onKeyDown={this.handleRatingChange}>              
                          {/* <svg className={`new-review__star ${i < this.state.rate ? "new-review__star--red" : "new-review__star--gray"}`} width="28" height="28"> */}
                            <svg width="28" height="28">
                              <use xlinkHref="#star"></use>
                            </svg>
                          </label>
                          <input className="new-review__star" type="radio" name="rating" value={(item + 1)} id={"star-" + (item + 1)} checked={item + 1 === this.state.rate} onChange={() => {}}/>
                        </Fragment>
                      ))}
                    </div>
                  </div>  
                  <div className="new-review__input-wrapper"> 
                    <label htmlFor="review" className="visually-hidden">Комметарий</label>            
                    <textarea className="new-review__input new-review__input--comment" id="review" name="review" placeholder="Комментарий"  value={this.state.comment}
                      onChange={this.handleCommentChange}
                    ></textarea>
                  </div>   
                </div>
              </div>

              <button onClick={this.handleReviewAdd.bind(this)} className="new-review__button">Оставить отзыв</button>

            </form>
          </div>
        </div>
          
      </FocusTrap>
    )
  }
}

NewReview.propTypes = {
	visible: PropTypes.bool.isRequired,
	onReviewAdd: PropTypes.func.isRequired,
	onPopupClose: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
	return {
		visible: state.isPopupVisible
	}
};

const mapDispatchToProps = (dispatch) => ({
  onPopupClose: () => {
    dispatch(ActionCreator.closePopup());
  },
  onReviewAdd: (review) => {
    dispatch(ActionCreator.sentReview(review));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewReview)
