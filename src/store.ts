import {
  calculateTipPerPerson,
  calculateTotalPricePerPerson,
} from 'helpers/math.helpers';
import { atom } from 'jotai';

export const billAtom = atom(0);
export const tipAtom = atom(0);
export const peopleQtyAtom = atom(0);

export const resetValueAtom = atom(null, (get, set) => {
  set(billAtom, 0);
  set(tipAtom, 0);
  set(peopleQtyAtom, 0);
});

export const tipPerPersonAtom = atom<number>((get) => {
  const billValue = get(billAtom);
  const tipValue = get(tipAtom);
  const peopleQty = get(peopleQtyAtom);
  return calculateTipPerPerson(billValue, tipValue, peopleQty);
});

export const totalPerPersonAtom = atom<number>((get) => {
  const tipPerPerson = get(tipPerPersonAtom);
  const billValue = get(billAtom);
  const peopleQty = get(peopleQtyAtom);
  return calculateTotalPricePerPerson(tipPerPerson, billValue, peopleQty);
});
