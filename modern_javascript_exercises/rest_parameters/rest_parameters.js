// Instructions can be found in rest_parameters.md

export const add = (...numbers) => {
  return numbers.reduce((total, number) => total += number, 0);
}