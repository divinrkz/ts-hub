type Person = {age: number, name: string, alive: boolean};

type Age = Person["age"];
// type Age = number;


type T1 = Person["age" | "name"];
// type T1 = string | number;


type T2 = Person[keyof Person];
// type T2 = string | number | boolean


type AliveOrName = "alive" | "name";
type T3 = Person[AliveOrName];
// type td3 = string | boolean




// Advanced example

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];   
// type Person = {
//     name: string;
//     age: number;
// }

type Age = typeof MyArray[number]["age"];
// type Age = number

// Or
type Age2 = Person["age"];
// type Age2 = number



const key = "age";
type Age = Person[key];
// Type 'any' cannot be used as an index type.
// 'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?


type key = "age";
type Age = Person[key];