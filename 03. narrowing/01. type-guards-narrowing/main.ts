function padLeft(padding: number | string, input: string) {
    return new Array(padding + 1).join(" ") + input;
//   Operator '+' cannot be applied to types 'string | number' and 'number'.
}


function padLeft2(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}


function padLeft3(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return new Array(padding + 1).join(" ") + input;
                         
//   (parameter) padding: number
    }
    return padding + input;
             
//   (parameter) padding: string
  }



  function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
      for (const s of strs) {
//   Object is possibly 'null'.
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
  }