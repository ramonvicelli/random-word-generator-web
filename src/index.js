import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import 'reset-css/reset.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import Template from './component/template/Template';
import WordBox from './view/word/Word';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {word} from './reducer/word';
import {notification} from './reducer/notification';

const reducers = combineReducers({word, notification});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

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
    <Provider store={store}>
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
    </Provider>
  ),
  document.getElementById('root'));
