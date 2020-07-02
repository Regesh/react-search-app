import React from 'react';
import Header from './header/Header';
import Testers from './testers/Testers';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App" data-testid="app-container">
      <Header data-testid='header' />
      <Testers />
      <Footer />
    </div>
  );
}

export default App;
