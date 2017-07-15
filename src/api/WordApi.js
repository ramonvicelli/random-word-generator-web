import HttpService from './HttpService';
import {getWords, notification} from '../actions/actionCreator';
import {createMessageError, createMessageSuccess, createMessageWarn} from '../component/Message';

const VALUE_MAX = 10000;

export default class WordAPi {

  constructor() {
    this.httpService = new HttpService();
  }

  validate(amount){
    if(amount === ''){
      return createMessageError('Number of words is required');
    }

    if(amount > VALUE_MAX){
      return createMessageError('Amount reported is greater than the allowance of 10,000');
    }
    return null;
  }

  words(amountWord) {
    return dispatch => {
      dispatch(getWords([]));
      const message = this.validate(amountWord);

      if(message === null){
        dispatch(notification(createMessageWarn('Loading...')));
        this.httpService.get(`/service/word/?number=${amountWord}`)
          .then(words => {
            dispatch(getWords(words));
            dispatch(notification(createMessageSuccess('Search done successfully')));

            return words;
          });
      }else{
        dispatch(getWords([]));
        dispatch(notification(message));
      }
    }
  }
}
