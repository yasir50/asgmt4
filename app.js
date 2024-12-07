const arrays = [
  42,
  true,
  "Hello, World!",
  { name: "John", age: 25, isStudent: false },
  false,
  3.14,
  "JavaScript is fun!",
];

// Q1: Convert all elements to their string representation using map Method
// const a = String(arrays.map((e) => e));
// console.log(typeof a);

const string = arrays.map((e) => {
  return String(e);
});
console.log(string);

// Q2: Filter only number elements using filter Method

let filterNumber = arrays.filter((e) => {
  return typeof e === "number";
});
console.log(filterNumber);

// Q3: Log each element's type to the console using forEach Method

arrays.forEach((e, i) => console.log(i, typeof e));

// Q4: Sum up only the numbers in the array using reduce Method

const sumNum = arrays.reduce((sum, e) => {
  return typeof e === "number" ? sum + e : sum;
});
console.log(sumNum);

// Q5: Find the first boolean value in an array using Find Method

const boolean = arrays.find((e) => {
  return e === true || e === false;
});
console.log(boolean);

// Q6: Find the index of the first object  using findIndex

const obj = arrays.findIndex((e) => {
  return typeof e === "object";
});
console.log(obj);

// Q7: Check if the array contains any numbers using some method

const number = arrays.some((e, i) => console.log(i, typeof e === "number"));

// Q8: Check if all elements are of type 'string' using every method

const typeString = arrays.every((e) => typeof e === "string");
console.log(typeString);
