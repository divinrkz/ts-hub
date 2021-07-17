
type ToArray<Type> = Type extends any ? Type[] : never;

// If we plug a union type into ToArray, then the conditional type will be applied to each member of that union.


type ToArray<Type> = Type extends any ? Type[]: never;
type StrArrOrNumber = ToArray<string | number>;

// Typically, distributivity is the desired behavior. To avoid that behavior, you can surround each side of the extends keyword with square brackets.
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 'StrOrNumArr' is no longer a union.
type StrOrNumArr = ToArrayNonDist<string | number>;