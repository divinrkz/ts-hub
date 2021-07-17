type NewKeyType = {};

type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
}



type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property> }`]: () => Type[Property];
}

type Setters<Type> = {
    [Property in keyof Type as `set${Capitalize<string & Property> }`]: () => void;
}


interface Person {
    name: string;
    age: number;
    location: string;
}


type LazyPerson = Getters<Person>;
type FancyPerson = Setters<Person>;



// Remove the 'kind' property
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};

interface Circle {
    kind: "circle";
    radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;
           

type ExtractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
  };
  
  type DBFields = {
    id: { format: "incrementing" };
    name: { type: string; pii: true };
  };
  
  type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;