import React from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import Alert from '../../component/Alert';

import WordApi from '../../api/WordApi';
import {word} from '../../reducer/word';
import {notification} from '../../reducer/notification';

const reducers = combineReducers({word, notification});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
const wordApi = new WordApi();


class WordForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {message: {type: 'error', text: ''}};
  }

  componentDidMount(){
    store.subscribe(() => this.setState({message:store.getState().notification}));
  }

  register(event){
    event.preventDefault();

    this.props.store.dispatch(wordApi.words(this.amount.value));
  }

  render(){
    return (
      <form onSubmit={this.register.bind(this)}>
        <Alert message={this.state.message}/>
        <div className="row">
          <div className="col-xs-12 form-group">
            <label htmlFor="amount">Number of words</label>
            <input type="number" name="amount" min="1" max="10000" className="form-control" ref={input => this.amount = input}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 form-group">
          <button type="submit" className="btn btn-primary pull-right">Find</button>
          </div>
        </div>
      </form>
    );
  }
}

class WordTable extends React.Component{
  render(){
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Word</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.words.map(word =>
                <tr key={word.position}>
                  <td>{word.word}</td>
                  <td>{word.position}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default class WordBox extends React.Component {
  constructor() {
    super();

    this.state = {words: []};
  }

  componentDidMount(){
    store.subscribe(() => this.setState({words:store.getState().word}));
  }

  render() {
    return (
      <div className = "word">
        <WordForm store={store}/>
        <div>
          <WordTable words={this.state.words}/>
        </div>
      </div>
    );
  }
}
