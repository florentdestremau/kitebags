import React, { Component } from 'react';
import axios from 'axios';
import Panel from 'react-bootstrap/lib/Panel';
import Accordion from 'react-bootstrap/lib/Accordion';
const API_URL = 'https://api.trello.com/1/lists/585ec4acf50a5396842199d2/cards';


class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
    };
  }
  
  componentDidMount() {
    axios.get(`${API_URL}`)
    .then(response => this.setState({
      companies: response.data,
    }))
    .catch(error => console.error(error));
  }
  
  render() {
    return (
      this.state.companies.length > 0 ? (
        <Accordion>
          {this.state.companies.map((company, index) => (
            <Panel
              header={<span>
                {company.name}
                {company.labels.length > 0 && company.labels.filter(label => label.id === '585ec6171cd9b8b707f38bb1').length > 0 ?
                  (<span className="badge bg-success pull-right">Gratuit</span>)
                  : null
                }
                {company.labels.length > 0 && company.labels.filter(label => label.id === '585ec62c1cd9b8b707f38bbb').length > 0 ?
                  (<span className="badge pull-right">Golfbag</span>)
                  : null
                }
              </span>}
              key={index}
              eventKey={index}
              >
              {company.desc}
            </Panel>
          ))}
        </Accordion>)
        : <p><em>Il n'y a pas de companies référencées</em></p>
    );
  }
}

export default CompanyList;
