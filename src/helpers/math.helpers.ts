export function calculateTipPerPerson(
  totalPrice: number,
  tipPercentage: number,
  peopleQty: number
): number {
  const totalTip = (totalPrice / peopleQty) * (tipPercentage / 100);
  return totalTip;
}

export function calculateTotalPricePerPerson(
  tipPerPerson: number,
  totalPrice: number,
  peopleQty: number
): number {
  return totalPrice / peopleQty + tipPerPerson;
}
