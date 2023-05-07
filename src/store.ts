import { atom } from 'jotai';

export const billAtom = atom(0);
export const tipAtom = atom(0);
export const peopleQtyAtom = atom(0);

export const resetValueAtom = atom(null, (get, set) => {
  console.log('called');
  set(billAtom, 0);
  set(tipAtom, 0);
  set(peopleQtyAtom, 0);
});
