function log(someArg: any) {
    sendDataToServer(someArg);
  }
  
function sendDataToServer(arg: string) {
}
  // What arg is valid and what isn't?
  log(123);
  log('hello world');