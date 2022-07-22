import React from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import {style} from './style/style'

const App = () => {
  return (
    <div style={style.general}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
