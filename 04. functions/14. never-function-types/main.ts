// Functions that never return a value

function fail(msg: string): never {
    throw new Error(msg);
}


function fn(x: string | number) {
    if (typeof x === "string") {
      // do something
    } else if (typeof x === "number") {
      // do something else
    } else {
      x; // has type 'never'!
    }
}
  
