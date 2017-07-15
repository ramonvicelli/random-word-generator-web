import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import 'reset-css/reset.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import Template from './component/template/Template';
import WordBox from './view/word/Word';

const NoMatch = class Match extends React.Component {
  render() {
    return (
      <div>
        <h3>No match for <code>{this.props.location.pathname}</code></h3>
      </div>
    );
  }
}

ReactDOM.render(
  (
    <Router>
      <App>
        <Template>
          <Switch>
            <Route exact path="/" component={WordBox}/>
            <Route component={NoMatch}/>
          </Switch>
        </Template>
      </App>
    </Router>
  ),
  document.getElementById('root'));
