import { useContext } from 'react';
import { CalculatorContext } from 'context/calculator-context';

export function useCalculator() {
  return useContext(CalculatorContext);
}
