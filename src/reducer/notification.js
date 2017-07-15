export function notification(state = [], action){
  if(action.type === 'NOTIFICATION'){
    return action.message;
  }
  return state;
}
