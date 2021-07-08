interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}
function handleShape(shape: Shape) {
  // oops!
  if (shape.kind === "rect") {
// This condition will always return 'false' since the types '"circle" | "square"' and '"rect"' have no overlap.
    // ...
  }
}



function getArea(shape: Shape) {
    return Math.PI * shape.radius ** 2;
//   Object is possibly 'undefined'.
}

function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius ** 2;
//   Object is possibly 'undefined'.
    }
}

function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius! ** 2;
    }
  }


  // A clean approach

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}
  
type Shape = Circle | Square;  


function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
                        
// (parameter) shape: Circle
    case "square":
      return shape.sideLength ** 2;
              
// (parameter) shape: Square
  }
}