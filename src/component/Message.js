function createMessage(type, text) {
  return {
    type,
    text
  };
}

export function createMessageError(text) {
  return createMessage('danger', text);
}

export function createMessageSuccess(text) {
  return createMessage('success', text);
}

export function createMessageWarn(text) {
  return createMessage('warning', text);
}
