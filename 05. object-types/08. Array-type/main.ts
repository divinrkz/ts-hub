function doSomething(value: Array<string>) {
    // ...
  }
  
  let myArray: string[] = ["hello", "world"];
  
  // either of these work!
  doSomething(myArray);
  doSomething(new Array("hello", "world"));