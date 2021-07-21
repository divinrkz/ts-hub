// Extract<Type, Union>
// Constructs a type by extracting from Type all union members that are assignable to Union.


type T0 = Extract<"a" | "b" | "c", "a" | "f">;
// type T0 = "a"

type T1 = Extract<string | number | (() => void), Function>;
// type T1 = () => void