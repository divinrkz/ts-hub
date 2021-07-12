function doStuff(values: ReadonlyArray<string>) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);
  
    // ...but we can't mutate 'values'.
    values.push("hello!");
//   Property 'push' does not exist on type 'readonly string[]'.
}



// Unlike Array, there isn’t a ReadonlyArray constructor that we can use.

new ReadonlyArray("red", "green", "blue");
// 'ReadonlyArray' only refers to a type, but is being used as a value here.


// Instead, we can assign regular Arrays to ReadonlyArrays.

const roArray: ReadonlyArray<string> = ["red", "green", "blue"];



// Just as TypeScript provides a shorthand syntax for Array<Type> with Type[],
//  it also provides a shorthand syntax for ReadonlyArray<Type> with readonly Type[].