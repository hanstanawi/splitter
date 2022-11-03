export const initialState = {
  billValue: 0,
  tip: 0,
  peopleQty: 0,
};

export type ActionType =
  | { type: 'SET_BILL_VALUE'; payload: number }
  | { type: 'SET_TIP_PERCENTAGE'; payload: number }
  | { type: 'SET_PEOPLE_QUANTIYT'; payload: number };

export type CalculatorState = typeof initialState;

export default function calculatorReducer(
  state: typeof initialState,
  action: ActionType
) {
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
