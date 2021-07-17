class Box {
    contents: string = "";
    set(value: string) {
//   (method) Box.set(value: string): this
      this.contents = value;
      return this;
    }
}