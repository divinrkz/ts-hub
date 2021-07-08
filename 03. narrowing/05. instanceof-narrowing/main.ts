function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
                 
//   (parameter) x: Date
    } else {
      console.log(x.toUpperCase());
                 
//   (parameter) x: string
    }
}