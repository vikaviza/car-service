import React from 'react';
import GlobalStyles from './Components/Styles/Global.style';
import Nav from './Components/Navbar/Navbar';
import CTA from './Components/CTA/CTA';
import FooterTop from './Components/Footer/FooterTop/FooterTop';

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <CTA />
      <FooterTop />
    </>
  );
}

export default App;
