import { Dispatch } from 'react';
import { ActionType } from 'context/calculator-reducer';

export interface ICalculatorContext {
  billValue: number;
  tip: number;
  peopleQty: number;
  dispatch: Dispatch<ActionType>;
}
