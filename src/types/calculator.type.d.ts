import { ActionType } from 'context/calculator-context';
import { CalculatorState } from 'context/calculator-reducer';
import { Dispatch } from 'react';

interface ICalculatorContext {
  billValue: number;
  tip: number;
  peopleQty: number;
  dispatch: Dispatch<ActionType>;
}

type CalculatorContextType = [CalculatorState, Dispatch<ActionType>];
