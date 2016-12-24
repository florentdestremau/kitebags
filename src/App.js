import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
const API_URL = 'http://localhost:3001';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
    };
  }
  
  componentDidMount() {
    axios.get(`${API_URL}/companies`)
    .then(response => this.setState({
      companies: response.data,
    }))
    .catch(error => console.error(error));
  }
  
  render() {
    return (
      <div className="App">
        <div className="jumbotron App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Bienvenue sur
            <br></br>
            <em>Voler avec mon boardbag !</em>
          </h2>
        </div>
        <h2 className="App-intro">
          Voici la liste des companies aériennes référencées :
        </h2>
        {
          this.state.companies.length > 0 ? (
            <ul className="list-group">
              {this.state.companies.map(company => (
              <li key={company.id} className="list-group-item text-capitalize">
                {company.name}
                {company.free ?
                  (<span className="badge">Gratuit</span>)
                  : null
                }
                {company.golfbag ?
                  (<span className="badge">Golfbag</span>)
                  : null
                }
              </li>
            ))}
            </ul>) : <p><em>Il n'y a pas de companies référencées</em></p>
        }
      </div>
    );
  }
}

export default App;
