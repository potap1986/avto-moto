import React from 'react'
import './app.scss';
import Header from '../header/header'
import Footer from '../footer/footer'
import Offer from '../offer/offer';
import NewReview from '../new-review/new-review';


const App = () => {
    
  return (
    <>
      <Header />
      <main className="page-main">
        <Offer />
      </main>
      <Footer />

      <NewReview />
    </>
  );
}

export default App;
