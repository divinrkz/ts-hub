interface Animal {
    live(): void;
  }
  interface Dog extends Animal {
    woof(): void;
  }

type Example1 = Dog extends Animal ? number : string;
// type Example1 = number

type Example2 = RegExp extends Animal ? number : string;
// type Example2 = string



interface IdLabel {
    id: number /* some fields */;
}
interface NameLabel {
    name: string /* other fields */;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
    throw "unimplemented";
}

// we can encode that logic in a conditional type:

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;


function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
}

let a = createLabel("typescript");  
// let a: NameLabel

let b = createLabel(2.8);
// let b: IdLabel

let c = createLabel(Math.random() ? "hello" : 42);
// let c: NameLabel | IdLabel



// we could also write a type called Flatten that flattens array types
//  to their element types, but leaves them alone otherwise:

type Flatten<T> = T extends any[] ? T[number] : T;

// Extracts out the element type.
type Str = Flatten<string[]>;
// type Str = string

// Leaves the type alone.
type Num = Flatten<number>;
// type Num = number