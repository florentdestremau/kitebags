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
            L'app qui te dit pour combien tu pourras transporter ton kite dans l'avion !
          </p>
        </div>
        <section>
          <CompanyList />
        </section>
        <hr />
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
          <h3>J'ai pas trouvé ma compagnie / les prix ont changé !!</h3>
          <p>
            Merci de me rejoindre sur mon <a href="https://trello.com/b/aRlm03GY/voler-avec-son-matos" target="_blank"><i className="glyphicon glyphicon-new-window"></i> board trello</a>.
            Tout est stocké dessus, tu pourras m'aider à contribuer !
          </p>
          <p className="small text-right">© 2017 Florent Destremau</p>
        </footer>
      </div>
    );
  }
}

export default App;
