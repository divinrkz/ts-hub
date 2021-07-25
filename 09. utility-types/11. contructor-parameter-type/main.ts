// ConstructorParameters<Type>
// Constructs a tuple or array type from the types of a constructor function type.
//  It produces a tuple type with all the parameter types (or the type never if Type is not a function).

type T0 = ConstructorParameters<ErrorConstructor>;
// type T0 = [message?: string]

type T1 = ConstructorParameters<FunctionConstructor>;
// type T1 = string[]

type T2 = ConstructorParameters<RegExpConstructor>;
// type T2 = [pattern: string | RegExp, flags?: string]

type T3 = ConstructorParameters<any>;     
// type T3 = unknown[]

type T4 = ConstructorParameters<Function>;
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
//   Type 'Function' provides no match for the signature 'new (...args: any): any'.
// type T4 = never