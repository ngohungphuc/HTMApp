import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardContainer from './components/Card/CardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <CardContainer></CardContainer>
        </div>
      </div>
    );
  }
}

export default App;
