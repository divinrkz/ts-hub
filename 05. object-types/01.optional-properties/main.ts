// In this example, both xPos and yPos are considered optional.
//  We can choose to provide either of them, so every call above to paintShape is valid.
//  All optionality really says is that if the property is set,
//  it better have a specific type.


interface Shape {}

interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
  }
  
  function paintShape(opts: PaintOptions) {
    // ...
  }
  
  const shape = getShape();
  paintShape({ shape });
  paintShape({ shape, xPos: 100 });
  paintShape({ shape, yPos: 100 });
  paintShape({ shape, xPos: 100, yPos: 100 });



  function getShape(): Shape {
      throw new Error('Method unimplemented!')
  }




  .

function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos);
                                  
var xPos: number
  console.log("y coordinate at", yPos);
                                  
var yPos: number
  // ...
}

// Here we used a destructuring pattern for paintShape’s parameter,
//  and provided default values for xPos and yPos. Now xPos and yPos are both definitely present within the body of paintShape, but optional for any callers to paintShape.