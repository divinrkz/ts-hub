class C {
    foo: number; // OKAY as assigned in constructor
    bar: string = "hello"; // OKAY as has property initializer
    baz: boolean; // TS ERROR: Property 'baz' has no initializer and is not assigned directly in the constructor.
    constructor() {
      this.foo = 42;
    }
  }


  class D {
    foo!: number;
    // ^
    // Notice this exclamation point!
    // This is the "definite assignment assertion" modifier.
  
    constructor() {
      this.initialize();
    }
    initialize() {
      this.foo = 0;
    }
  }


let a: number[]; // No assertion
let b!: number[]; // Assert

initialize();

a.push(4); // TS ERROR: variable used before assignment
b.push(4); // OKAY: because of the assertion

function initialize() {
  a = [0, 1, 2, 3];
  b = [0, 1, 2, 3];
}