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
          Voici la liste des compagnies aériennes référencées :
        </h3>
        <section>
          <CompanyList />
        </section>
        <footer>
          <h3>Comment ça fonctionne ?</h3>
          <p>
            Les badges précisent comment la compagnie interagit avec le matos.
            Voici la liste des badges existants :
          </p>
          <ul>
            <li><strong className="badge bg-success">Gratuit</strong> : la compagnie ne facture pas les boardbags</li>
            <li><strong className="badge">Golfbag</strong> : la compagnie ne facture pas que les sacs de golf, attention au marquage</li>
            <li><strong className="badge bg-danger">60&nbsp;€</strong> : la compagnie facture 60&nbsp;€ par trajet</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
