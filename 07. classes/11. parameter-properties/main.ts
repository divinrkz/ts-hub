class Params {
    constructor(
      public readonly x: number,
      protected y: number,
      private z: number
    ) {
      // No body necessary
    }
  }
  const a = new Params(1, 2, 3);
  console.log(a.x);
               
//   (property) Params.x: number
  console.log(a.z);
  