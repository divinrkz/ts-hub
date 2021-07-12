interface Box {
    contents: any;
}


interface Box {
    contents: unknown;
}
  
let x: Box = {
    contents: "hello world",
};

// we could check 'x.contents'
if (typeof x.contents === "string") {
    console.log(x.contents.toLowerCase());
}

// or we could use a type assertion
console.log((x.contents as string).toLowerCase())



interface NumberBox {
    contents: number;
}
  
interface StringBox {
    contents: string;
}

interface BooleanBox {
    contents: boolean;
}


interface Box<Type> {
    contents: Type;
}


let boxA: Box<string> = { contents: "hello" };
boxA.contents;




type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
           
type OneOrManyOrNull<Type> = OneOrMany<Type> | null

type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
               
type OneOrManyOrNullStrings = OneOrMany<string> | null