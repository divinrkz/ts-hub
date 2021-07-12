// This index signature states that when a StringArray is indexed with a number,
//  it will return a string.


interface StringArray {
    [index: number]: string;
}
  
const myArray: StringArray = getStringArray();
const secondItem = myArray[1];

function getStringArray(): StringArray {
    throw new Error("Function not implemented.");
}


interface NumberDictionary {
    [index: string]: number;
  
    length: number; // ok
    name: string;
//   Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}

  
interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
  }