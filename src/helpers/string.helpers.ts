export function validateIsValidNumber(str: string): boolean {
  const numberRegex = /^[0-9]+.*$/;
  return numberRegex.test(str);
}
