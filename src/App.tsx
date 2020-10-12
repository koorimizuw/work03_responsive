import React from 'react';
import styled from 'styled-components'
import './css/html5reset-1.6.1.css';

import Header from './Header';
import Main from './Main';
import Intro from './Intro';
import Price from './Price';
import Footer from './Footer';


const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Main />
        <Intro />
        <Price />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
