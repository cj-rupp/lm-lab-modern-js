// Instructions can be found in const_vs_let.md

const people = ["Barbara", "Jacob", "Angela", "Brangela"];

export const countThePeople = () => {
  return people.reduce((total,person) => total += 1, 0);
}

console.log(countThePeople());
