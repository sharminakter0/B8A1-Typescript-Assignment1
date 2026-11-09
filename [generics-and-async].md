# Generics and Asynchronous Programming in TypeScript

## Introduction

Generics allow us to write reusable functions and work with different data types while keeping type safety. Instead of writing a separate function for each type, we can use a type parameter such as `T`. Generics are also useful when working with asynchronous operations and `Promise<T>`.

## Detailed Explanation

For example, we can use a generic function to combine multiple arrays. The type parameter `T` helps TypeScript remember the type of the array items.

```ts
export function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

const numbers = concatenateArrays([1, 2], [3, 4]);
// TypeScript knows that numbers is number[].
```

Here, the function works with numbers, strings, or other types without needing `any`.

Promises also use generics. In `Promise<T>`, `T` represents the type of value that the promise will return when it is successful. For example, `Promise<string>` means the promise resolves with a string.

```ts
export function validateAgeAsync(
  age: number
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}
```

In this example, the function returns a promise that resolves with a string after one second when the age is 18 or above. Otherwise, it rejects with an error. The `Promise<string>` type makes the successful return value clear to TypeScript.

## Conclusion

Generics make functions reusable while preserving type information. With `Promise<T>`, they also help us describe the result of asynchronous operations clearly and safely.
