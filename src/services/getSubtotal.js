export const getSubtotal = (amountArr) =>
  amountArr.reduce((total, currVal) => total + currVal).toFixed(2);
