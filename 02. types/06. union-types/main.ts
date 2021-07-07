function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
  printId({ myID: 22342 });

  //Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
//   Type '{ myID: number; }' is not assignable to type 'number'