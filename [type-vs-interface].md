Type Aliases vs. Interfaces in TypeScript
Introduction
TypeScript provides both type aliases and interface declarations to describe the shape of data.They often look similar,but they support different capabilities.Understanding those differences helps developers create clear,maintainable type definitions.
Detailed Explanation
An interface is commonly used to describe the structure of an object.Interfaces can be extended with extends,and declarations with the same name can be merged.
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}