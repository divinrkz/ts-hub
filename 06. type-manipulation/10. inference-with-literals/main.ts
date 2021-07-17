type PropEventSource<Type> = {
    on<Key extends string & keyof Type>
        (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void ): void;
};

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});

person.on("firstNameChanged", newName => {  
// (parameter) newName: string
    console.log(`new name is ${newName.toUpperCase()}`);
});

person.on("ageChanged", newAge => {
// (parameter) newAge: number
    if (newAge < 0) {
        console.warn("warning! negative age");
    }
})