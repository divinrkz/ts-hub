function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }
  
  // longerArray is of type 'number[]'
  const longerArray = longest([1, 2], [1, 2, 3]);

  // longerString is of type 'string'
  const longerString = longest("alice", "bob");

  // Error! Numbers don't have a 'length' property
  const notOK = longest(10, 100);
//   Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.




function minimumLength<Type extends { length: number }>(
    obj: Type,
    minimum: number
  ): Type {
    if (obj.length >= minimum) {
      return obj;
    } else {
      return { length: minimum };
//   Type '{ length: number; }' is not assignable to type 'Type'.
    // '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
    }
}

// 'arr' gets value { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// and crashes here because arrays have
// a 'slice' method, but not the returned object!
console.log(arr.slice(0));