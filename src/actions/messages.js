export const MESSAGE_SEND = 'MESSAGE_SEND';
export const MESSAGE_READ = 'MESSAGE_READ';

export const sendMessage = ({ message, user }) => ({
  type: MESSAGE_SEND,
  payload: { message, user }
});

export const readMessage = (payload) => ({
  type: MESSAGE_READ,
  payload
});