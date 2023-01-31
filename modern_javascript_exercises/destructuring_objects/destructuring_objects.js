// Instructions can be found in destructuring_objects.md

export function introduction(person) {
  const {name, pet, city} = person;
  return `Hello my name is ${name} and I live in ${city} with ${pet}`;
}
