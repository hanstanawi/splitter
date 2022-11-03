import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { ICalculatorContext } from 'types/calculator.type';

// TODO: Refactor these functions and const as separate files
const CalculatorContext = createContext<ICalculatorContext>({
  billValue: 0,
  peopleQty: 0,
  tip: 0,
  dispatch: () => {},
});

export function useCalculator() {
  return useContext(CalculatorContext);
}

const initialState = {
  billValue: 0,
  tip: 0,
  peopleQty: 0,
};

export type ActionType =
  | { type: 'SET_BILL_VALUE'; payload: number }
  | { type: 'SET_TIP_PERCENTAGE'; payload: number }
  | { type: 'SET_PEOPLE_QUANTIYT'; payload: number };

export type CalculatorState = typeof initialState;

function calculatorReducer(state: typeof initialState, action: ActionType) {
  switch (action.type) {
    case 'SET_BILL_VALUE': {
      return {
        ...state,
        billValue: action.payload,
      };
    }
    default:
      return state;
  }
}

function CalculatorContextProvider({ children }: { children: ReactNode }) {
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

export default CalculatorContextProvider;
