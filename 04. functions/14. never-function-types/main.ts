// Functions that never return a value

function fail(msg: string): never {
    throw new Error(msg);
}