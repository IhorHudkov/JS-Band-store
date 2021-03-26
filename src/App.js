import React from 'react';
import ScreensCatalog from './screens/Catalog';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <ScreensCatalog />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
