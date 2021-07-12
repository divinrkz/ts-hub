function sum({ a, b, c }) {
    console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });


// Wirh parameter destructing

function sum({ a, b, c }: { a: number; b: number; c: number }) {
    console.log(a + b + c);
}