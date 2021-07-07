function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  
  greet("Maddison", Date());
  greet("Maddison", new Date());
  // Argument of type 'string' is not assignable to parameter of type 'Date'.