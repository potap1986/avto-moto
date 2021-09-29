import React from 'react'
import './app.scss';
import Header from '../header/header'
import Footer from '../footer/footer'
import Offer from '../offer/offer';
import NewRewiew from '../new-rewiew/new-rewiew';


function App() {
  return (
    <>
      <Header />
      <main className="page-main">
        <Offer />
      </main>
      <Footer />

      <NewRewiew />
    </>
  );
}

export default App;
