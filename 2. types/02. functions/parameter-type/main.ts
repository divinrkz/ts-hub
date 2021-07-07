// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }

// Would be a runtime error if executed!
greet(42);

//Argument of type 'number' is not assignable to parameter of type 'string'.