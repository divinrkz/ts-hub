// Exclude<Type, ExcludedUnion>
// Constructs a type by excluding from Type all union members
//  that are assignable to ExcludedUnion.

type T0 = Exclude<"a" | "b" | "c", "a">;
// type T0 = "b" | "c"


type T1 = Exclude<"a" | "b" | "c", "a" | "b">;     
// type T1 = "c"

type T2 = Exclude<string | number | (() => void), Function>;
// type T2 = string | number