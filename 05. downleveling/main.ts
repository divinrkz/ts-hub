function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  
  greet("Maddison", new Date());

  // when compliling with tsc
  // `Hello ${person}, today is ${date.toDateString()}!`;
  //     changes to
  // "Hello " + person + ", today is " + date.toDateString() + "!";


  // but running with tsc --target es2015 gives the same output