function f(n: number) {
    console.log(n.toFixed()); // 0 arguments
    console.log(n.toFixed(3)); // 1 argument
}

function f(x?: number) {
    // ...
  }
f(); // OK
f(10); // OK


function f(x = 10) {
    // ...
}

declare function f(x?: number): void;
// cut
// All OK
f();
f(10);
f(undefined);