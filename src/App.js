import React from 'react';
import GlobalStyles from './Components/Styles/Global.style';
import Nav from './Components/Navbar/Navbar';
import CTA from './Components/CTA/CTA';
import Footer from './Components/Footer/Footer';
import Home from './screens/Home/Home';

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <CTA />
      <Footer />
      <Home />
    </>
  );
}

export default App;
