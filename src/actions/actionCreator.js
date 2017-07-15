export function getWords(words) {
  return {
    type: 'GET',
    words
  };
}

export function notification(message) {
  return {
    type: 'NOTIFICATION',
    message
  };
}
