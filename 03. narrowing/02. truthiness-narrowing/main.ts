// both of these result in 'true'
Boolean("hello"); // type: boolean, value: true
!!"world";        // type: true,    value: true



function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
}


function multiplyAll(values: number[] | undefined, factor: number): number[] | undefined {
    if (!values) {
      return values;
    } else {
      return values.map((x) => x * factor);
    }
}