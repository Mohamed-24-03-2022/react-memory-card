import React from 'react';
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

const App = (props) => {

  return (
    <React.Fragment>
      < Nav />
      < Main />
      < Footer />
    </React.Fragment>
  );
};

export default App;
