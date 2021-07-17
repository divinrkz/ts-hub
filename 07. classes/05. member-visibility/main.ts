class Greeter {
    public greet() {
      console.log("Hello, " + this.getName());
    }
    protected getName() {
      return "hi";
    }
  }
  
  class SpecialGreeter extends Greeter {
    public howdy() {
      // OK to access protected member here
      console.log("Howdy, " + this.getName());
    }
  }