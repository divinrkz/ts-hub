function firstElement<Type>(arr: Type[]): Type {
    return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
  }
  
  function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
  ): Type[] {
    return arr.filter(func);
  }