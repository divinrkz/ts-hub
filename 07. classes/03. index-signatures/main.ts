class MyClass {
    [s: string]: boolean | ((s: string) => boolean);
  
    check(s: string) {
      return this[s] as boolean;
    }
}