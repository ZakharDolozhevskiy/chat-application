export const isEnterKey = event =>
  event.keyCode === 13 || event.keyCode === 10;

export const isCtrlKey = event =>
  event.ctrlKey || event.metaKey;

export const extractConstants = (exports, output = []) =>
  Object.keys(exports).reduce((acc, record) => {
    return (typeof exports[record] === 'string')
      ? acc.concat([record])
      : acc;
  }, output);
