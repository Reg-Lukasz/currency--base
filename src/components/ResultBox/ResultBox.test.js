import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';

const testCasesPLNtoUSD = [
  { amount: '100.00', from: 'PLN', to: 'USD', result: '28.57' },
  { amount: '20.00', from: 'PLN', to: 'USD', result: '5.71' },
  { amount: '200.00', from: 'PLN', to: 'USD', result: '57.14' },
  { amount: '345.00', from: 'PLN', to: 'USD', result: '98.57' },
];

const testCasesUSDtoPLN = [
  { amount: '100.00', from: 'USD', to: 'PLN', result: '350.00' },
  { amount: '20.00', from: 'USD', to: 'PLN', result: '70.00' },
  { amount: '200.00', from: 'USD', to: 'PLN', result: '700.00' },
  { amount: '345.00', from: 'USD', to: 'PLN', result: '1,207.50' },
];

const testCasesUSDtoUSD = [
  { amount: '100.00', from: 'USD', to: 'USD', result: '100.00' },
  { amount: '20.00', from: 'USD', to: 'USD', result: '20.00' },
  { amount: '200.00', from: 'USD', to: 'USD', result: '200.00' },
  { amount: '345.00', from: 'USD', to: 'USD', result: '345.00' },
];

const testCasesPLNtoPLN = [
  { amount: '100.00', from: 'PLN', to: 'PLN', result: '100.00' },
  { amount: '20.00', from: 'PLN', to: 'PLN', result: '20.00' },
  { amount: '200.00', from: 'PLN', to: 'PLN', result: '200.00' },
  { amount: '345.00', from: 'PLN', to: 'PLN', result: '345.00' },
];

const testCasesLowerThanZero = [
  { amount: '-100.00', from: 'PLN', to: 'USD', result: 'Wrong value...' },
  { amount: '-20.00', from: 'USD', to: 'PLN', result: 'Wrong value...' },
  { amount: '-200.00', from: 'PLN', to: 'USD', result: 'Wrong value...' },
  { amount: '-345.00', from: 'USD', to: 'PLN', result: 'Wrong value...' },
];

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });
  it('should render proper info about conversion when PLN -> USD', () => {

    for(const testObj of testCasesPLNtoUSD){

      // render component
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);

      // find "resultBox" div
      const resultBox = screen.getByTestId('result-box');

      // check if "resultBox" div shows proper info
      expect(resultBox).toHaveTextContent(`PLN ${testObj.amount} = $${testObj.result}`);

      // unmount component
      cleanup();
    };
  });
  it('should render proper info about conversion when USD -> PLN', () => {

    for(const testObj of testCasesUSDtoPLN){

      // render component
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);

      // find "resultBox" div
      const resultBox = screen.getByTestId('result-box');

      // check if "resultBox" div shows proper info
      expect(resultBox).toHaveTextContent(`$${testObj.amount} = PLN ${testObj.result}`);

      // unmount component
      cleanup();
    };
  });
  it('should render proper info about conversion when USD -> USD', () => {

    for(const testObj of testCasesUSDtoUSD){

      // render component
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);

      // find "resultBox" div
      const resultBox = screen.getByTestId('result-box');

      // check if "resultBox" div shows proper info
      expect(resultBox).toHaveTextContent(`$${testObj.amount} = $${testObj.result}`);

      // unmount component
      cleanup();
    };
  });
  it('should render proper info about conversion when PLN -> PLN', () => {

    for(const testObj of testCasesPLNtoPLN){

      // render component
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);

      // find "resultBox" div
      const resultBox = screen.getByTestId('result-box');

      // check if "resultBox" div shows proper info
      expect(resultBox).toHaveTextContent(`PLN ${testObj.amount} = PLN ${testObj.result}`);

      // unmount component
      cleanup();
    };
  });
  it('should return "Wrong value..." when input is lower than zero', () => {

    for(const testObj of testCasesLowerThanZero){

      // render component
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);

      // find "resultBox" div
      const resultBox = screen.getByTestId('result-box');

      // check if "resultBox" div shows proper info
      expect(resultBox).toHaveTextContent(testObj.result);

      // unmount component
      cleanup();
    };
  });
});