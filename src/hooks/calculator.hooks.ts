import { CalculatorContext } from 'context/calculator-context';
import { useContextSelector } from 'use-context-selector';

export function useBillValue() {
  return useContextSelector(CalculatorContext, (state) => state.billValue);
}

export function useTip() {
  return useContextSelector(CalculatorContext, (state) => state.tip);
}

export function usePeopleQuantity() {
  return useContextSelector(CalculatorContext, (state) => state.peopleQty);
}

export function useContextDispatch() {
  return useContextSelector(CalculatorContext, (state) => state.dispatch);
}
