// StringNumberPair is a tuple type of string and number.
//  Like ReadonlyArray, it has no representation at runtime,
//  but is significant to TypeScript. 

type StringNumberPair = [string, number];


function doSomething(pair: [string, number]) {
    const a = pair[0];
         
  const a: string
    const b = pair[1];
         
  const b: number
    // ...
  }
  
  doSomething(["hello", 42]);

  type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord;
              
const z: number | undefined

  console.log(`Provided coordinates had ${coord.length} dimensions`);
                                                  
// (property) length: 2 | 3
}

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];



function readButtonInput(...args: [string, number, ...boolean[]]) {
    const [name, version, ...input] = args;
    // ...
}

// is basically equivalent to:

function readButtonInput(name: string, version: number, ...input: boolean[]) {
  // ...
}