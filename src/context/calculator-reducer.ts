export const initialState = {
  billValue: 0,
  tip: 0,
  peopleQty: 0,
};

export type ActionType =
  | { type: 'SET_BILL_VALUE'; payload: number }
  | { type: 'SET_TIP_PERCENTAGE'; payload: number }
  | { type: 'SET_PEOPLE_QUANTITY'; payload: number };

export type CalculatorState = typeof initialState;

export default function calculatorReducer(
  state: CalculatorState,
  action: ActionType
) {
  switch (action.type) {
    case 'SET_BILL_VALUE': {
      return {
        ...state,
        billValue: action.payload,
      };
    }
    case 'SET_TIP_PERCENTAGE': {
      return {
        ...state,
        tip: action.payload,
      };
    }
    case 'SET_PEOPLE_QUANTITY': {
      return {
        ...state,
        peopleQty: action.payload,
      };
    }
    default:
      return state;
  }
}
