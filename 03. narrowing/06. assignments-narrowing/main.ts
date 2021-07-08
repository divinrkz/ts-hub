let x = Math.random() < 0.5 ? 10 : "hello world!";
// let x: string | number

x = 1;

console.log(x);
// let x: number

x = true;
// Type 'boolean' is not assignable to type 'string | number'.

console.log(x);
// let x: string | number