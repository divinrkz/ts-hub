type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}