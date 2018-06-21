export const extractConstants = (exports, output = []) =>
  Object.keys(exports).reduce((acc, record) => {
    return (typeof exports[record] === 'string')
      ? acc.concat([record])
      : acc;
  }, output);
