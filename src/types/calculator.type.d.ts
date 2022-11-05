import { ActionType } from 'context/calculator-context';
import { Dispatch } from 'react';

interface ICalculatorContext {
  billValue: number;
  tip: number;
  peopleQty: number;
  dispatch: Dispatch<ActionType>;
}

type CalculatorContextType = [CalculatorState, Dispatch<ActionType>];
