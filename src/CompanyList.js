import React, { Component } from 'react';
import axios from 'axios';
import Panel from 'react-bootstrap/lib/Panel';
import Accordion from 'react-bootstrap/lib/Accordion';
const API_URL = 'http://localhost:3001';


class CompanyList extends Component {
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
      this.state.companies.length > 0 ? (
        <Accordion>
          {this.state.companies.map((company, index) => (
            <Panel
              header={<span>
                {company.name}
                {company.free ?
                  (<span className="badge bg-success pull-right">Gratuit</span>)
                  : null
                }
                {company.golfbag ?
                  (<span className="badge pull-right">Golfbag</span>)
                  : null
                }
              </span>}
              key={index}
              eventKey={index}
              >
              {company.description}
            </Panel>
          ))}
        </Accordion>)
        : <p><em>Il n'y a pas de companies référencées</em></p>
    );
  }
}

export default CompanyList;
