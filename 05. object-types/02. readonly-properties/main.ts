// a property marked as readonly can’t be written to during type-checking.

interface SomeType {
    readonly prop: string;
  }
  
  function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
  
    // But we can't re-assign it.
    obj.prop = "hello";
//   Cannot assign to 'prop' because it is a read-only property.
  }




interface Home {
    readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
}



// the readonly modifier doesn’t necessarily imply that a value is totally immutable 
// - or in other words, that its internal contents can’t be changed. 
// It just means the property itself can’t be re-written to.

function evict(home: Home) {
// But we can't write to the 'resident' property itself on a 'Home'.
    home.resident = {
    // Cannot assign to 'resident' because it is a read-only property.
        name: "Victor the Evictor",
        age: 42,
    };
}  