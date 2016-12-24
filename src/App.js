import React, { Component } from 'react';
import './App.css';
import CompanyList from './CompanyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron App-header">
          <h2>
            Kitebags
          </h2>
          <p>
            L'app qui te dit comment transporter ton kite dans l'avion !
          </p>
        </div>
        <h3 className="App-intro">
          Voici la liste des companies aériennes référencées :
        </h3>
        <section>
          <CompanyList />
        </section>
        <footer>
          <h3>Comment ça fonctionne ?</h3>
        </footer>
      </div>
    );
  }
}

export default App;
