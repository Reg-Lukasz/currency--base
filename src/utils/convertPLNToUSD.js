export const convertPLNToUSD = (PLN) => {

  const PLNtoUSD = PLN / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  //unit test
  if(typeof PLN === "string" || PLN === undefined) return NaN;
  if(typeof PLN === 'object' || typeof PLN === 'function') return 'Error';
  if(PLN < 0) return formatter.format(0).replace(/\u00a0/g, ' ');

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}