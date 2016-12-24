import React, { Component } from 'react';
import './App.css';
import CompanyList from './CompanyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron App-header">
          <p>
            Bienvenue sur
          </p>
          <h2>
            Voler avec mon boardbag
          </h2>
        </div>
        <h3 className="App-intro">
          Voici la liste des companies aériennes référencées :
        </h3>
        <CompanyList />
      </div>
    );
  }
}

export default App;
