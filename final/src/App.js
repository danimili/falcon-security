import React from 'react';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Clients from './components/clients/Clients';
import Services from './components/services/Services';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <About />
      <Services />
      <Clients />
      <Footer />
    </React.Fragment>
  );
}

export default App;
