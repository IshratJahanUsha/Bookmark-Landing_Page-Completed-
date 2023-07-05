import React from 'react';
import {CTA, Header, Download, FAQs, Footer, Home} from "./components/index"


function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <Tabs /> */}
      <Download />
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
