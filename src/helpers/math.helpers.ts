export function calculateTipPerPerson(
  totalPrice: number,
  tipPercentage: number,
  peopleQty: number
): number {
  const totalTip = totalPrice * tipPercentage;
  return totalTip / peopleQty;
}

export function calculateTotalPricePerPerson(
  tipPerPerson: number,
  totalPrice: number,
  peopleQty: number
): number {
  return (tipPerPerson + totalPrice) / peopleQty;
}
