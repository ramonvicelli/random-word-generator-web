import {List} from 'immutable';

export function word(state = [], action){
  if(action.type === 'GET'){
    return new List(action.words);

  }
  return state;
}
