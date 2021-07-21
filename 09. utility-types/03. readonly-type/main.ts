// Readonly<Type>
// Constructs a type with all properties of Type set to readonly,
//  meaning the properties of the constructed type cannot be reassigned.



interface Todo {
    title: string;
}


const todo:Readonly<Todo> = {
    title: 'Delete inactive users'
}

todo.title = 'sd';
// Cannot assign to 'title' because it is a read-only property

