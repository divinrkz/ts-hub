type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}


// Optional parameters

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = {  swim?: () => void, fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) { 
    animal
      
// (parameter) animal: Fish | Human
  } else {
    animal
      
// (parameter) animal: Bird | Human
  }
}