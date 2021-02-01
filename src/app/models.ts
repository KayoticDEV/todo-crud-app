export type ToDoItem = {
    id: number;
    item: string;
}

export type Response = {
    toDoItem: ToDoItem[]
}