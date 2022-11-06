import { useMemo, useReducer, ReactNode } from 'react';
import { createContext } from 'use-context-selector';
import { ICalculatorContext } from 'types/calculator.type';
import calculatorReducer, { initialState } from './calculator-reducer';

export const CalculatorContext = createContext<ICalculatorContext>({
  billValue: 0,
  peopleQty: 0,
  tip: 0,
  dispatch: () => {},
});

type CalculatorContextProviderProps = {
  children: ReactNode;
};

export function CalculatorContextProvider({
  children,
}: CalculatorContextProviderProps) {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const providerValue = useMemo(
    () => ({
      billValue: state.billValue,
      peopleQty: state.peopleQty,
      tip: state.tip,
      dispatch,
    }),
    [state.billValue, state.peopleQty, state.tip]
  );

  return (
    <CalculatorContext.Provider value={providerValue}>
      {children}
    </CalculatorContext.Provider>
  );
}
