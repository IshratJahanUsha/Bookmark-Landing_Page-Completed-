import React from 'react';

import CTA from "./components/CTA";
import Download from "./components/Download";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Tabs from "./components/Tabs";
// import AllComponent from "./components/AllComponent";
// CTA, Download, FAQs, Footer, Header, Home, Tabs 

function App() {
  return (
    <>
      {/* <AllComponent/> */}
      <Header />
      <Home />
      <Tabs />
      <Download />
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
