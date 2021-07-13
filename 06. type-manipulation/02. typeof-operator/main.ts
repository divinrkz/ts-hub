let s = "hello";
let n: typeof s;

// let n: string



type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
// type K = boolean


function f() {
    return { x: 10, y: 3 };
}
type P = ReturnType<f>;

// 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?

type P = ReturnType<typeof f>;
