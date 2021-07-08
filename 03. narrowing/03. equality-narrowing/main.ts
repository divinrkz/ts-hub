function example(x: string | number, y: string | boolean) {
    if (x === y) {
      // We can now call any 'string' method on 'x' or 'y'.
      x.toUpperCase();
            
//   (method) String.toUpperCase(): string
      y.toLowerCase();
            
//   (method) String.toLowerCase(): string
    } else {
      console.log(x);
                 
//   (parameter) x: string | number
      console.log(y);
                 
//   (parameter) y: string | boolean
    }
}


interface Container {
    value: number | null | undefined;
}
  
function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
      console.log(container.value);
                             
//   (property) Container.value: number
  
      // Now we can safely multiply 'container.value'.
      container.value *= factor;
    }
}