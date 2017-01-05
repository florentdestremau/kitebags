import React, { Component } from 'react';
import './App.css';
import CompanyList from './CompanyList';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron App-header">
          <img src={logo} alt="logo" className="img-responsive" style={{ margin: 'auto' }}/>
          <p className="small">
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
            <li><strong className="badge bg-danger">Payant</strong> : la compagnie facture le boardbag</li>
            <li><strong className="badge bg-warning">+1 bagage</strong> : la compagnie ne compte pas le boardbag en bagage supplémentaire</li>
          </ul>
          <h3>J'ai pas trouvé ma compagnie / les prix ont changé !!</h3>
          <p>
            Merci de me rejoindre sur mon <a href="https://trello.com/b/aRlm03GY/voler-avec-son-matos" target="_blank"><i className="glyphicon glyphicon-new-window"></i> board trello</a>.
            Tout est stocké dessus, tu pourras m'aider à contribuer !
          </p>
          <p>
            Comme me l'a fait remonter @Raph, on peut toujours se référer à <a href="http://www.kitetrip-planner.com/fr/le-blog/22-divers/699-top-10-des-franchises-bagages.html" target="_blank">cet article</a> qui date de deux ans pour avoir une idée générale.
          </p>
          <p>
            Sinon @Thomas m'a fait remonté <a href="http://www.carvemag.com/2017/01/2017-surfers-airline-baggage-fees-guide/" target="_blank">cet article, plus récent</a>
          </p>
          <p className="small text-right">© 2017 Florent Destremau</p>
        </footer>
      </div>
    );
  }
}

export default App;
