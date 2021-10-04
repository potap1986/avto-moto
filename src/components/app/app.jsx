import React from 'react'
import PropTypes from "prop-types";
import './app.scss';
import Header from '../header/header'
import Footer from '../footer/footer'
import Offer from '../offer/offer';
import NewReview from '../new-review/new-review';
import { connect } from 'react-redux'


const App = (props) => {

  React.useEffect(() => {
    renderNewReview(props.visible)
  }, [props.visible]);

  const renderNewReview = (visible) => {
    return visible 
    ? <NewReview />
    : null}
      
  return (
    <>
      <Header />
      <main className="page-main">
        <Offer />
      </main>
      <Footer />
      {renderNewReview(props.visible)}
    </>
  );
}

App.propTypes = {
	visible: PropTypes.bool.isRequired
}


const mapStateToProps = (state) => {
	return {
		visible: state.isPopupVisible
	}
};


export default connect(mapStateToProps)(App);
