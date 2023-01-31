import { countThePeople } from "./const_vs_let";

test('Running countThePeople() with the internally defined array: ["Barbara", "Jacob", "Angela", "Brangela"] returns 4',
    () => {
        expect(countThePeople()).toBe(4);
  });