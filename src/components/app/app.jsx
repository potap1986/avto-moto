import React, {useState} from 'react'
import './app.scss';
import Header from '../header/header'
import Footer from '../footer/footer'
import Offer from '../offer/offer';
import NewReview from '../new-review/new-review';


function App(props) {
  
  const [popupVisible, setPopupVisibility] = useState(false);
  const [newReview, addNewReview] = useState({
    author: "",
    plus: "",
    minus: "",
    comment: "",
    rate: 0,
    time: ""
  })
  
  return (
    <>
      <Header />
      <main className="page-main">
        <Offer changePopupVisibility={setPopupVisibility} />
      </main>
      <Footer />

      <NewReview changePopupVisibility={setPopupVisibility} visible={popupVisible} reviewAddHandler={addNewReview}/>
    </>
  );
}

export default App;
