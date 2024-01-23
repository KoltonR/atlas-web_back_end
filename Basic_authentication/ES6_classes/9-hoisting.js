import listOfStudents, { StudentHolberton, HolbertonClass } from "./9-hoisting.js";

test("listOfStudents has the correct length", () => {
  expect(listOfStudents.length).toBe(5);
});

test("initialization works correctly", () => {
  expect(listOfStudents[0] instanceof StudentHolberton).toBe(true);
  expect(listOfStudents[0].holbertonClass instanceof HolbertonClass).toBe(true);
});

test("fullStudentDescription returns the right strings", () => {
  const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
  );
  expect(listPrinted).toEqual([
    'Guillaume Salva - 2020 - San Francisco',
    'John Doe - 2020 - San Francisco',
    'Albert Clinton - 2019 - San Francisco',
    'Donald Bush - 2019 - San Francisco',
    'Jason Sandler - 2019 - San Francisco',
  ]);
});