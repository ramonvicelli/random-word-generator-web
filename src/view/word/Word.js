import React from 'react';
import {connect} from 'react-redux';
import Alert from '../../component/Alert';
import WordApi from '../../api/WordApi';

const wordApi = new WordApi();

class WordForm extends React.Component{
  register(event){
    event.preventDefault();

    this.props.find(this.amount.value);
  }

  render(){
    return (
      <form onSubmit={this.register.bind(this)}>
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

class WordBox extends React.Component {
  render() {
    return (
      <div className = "word">
        <Alert message={this.props.message}/>
        <WordForm {...this.props}/>
        <div>
          <WordTable words={this.props.words}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    words: state.word,
    message: state.notification
  }
};

const mapDispatchToProps = dispatch => {
  return {
    find: amountWord => dispatch(wordApi.words(amountWord)),
  };
};

const WordContainer = connect(mapStateToProps, mapDispatchToProps)(WordBox);

export default WordContainer;
