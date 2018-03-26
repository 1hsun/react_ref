//@flow
type TodoAddFormProps = {
    placeholderText: string,
    onItemAdd: (x: Item) => void,
};
type TodoItemProps = {
    title: string,
    style: object,
    onItemClick: func,
};
type TodoListProps = {
    children?: React$Element<*>,
};
type Item = {
    id: number,
    title: string,
    isCompleted: boolean,
    isEditing: boolean,
};
type TodoEditFormProps = {
    title: string,
    onItemUpdate: (x: string) => void,
}
type TodoSearchFormProps = {
    placeholderText: string,
    onItemSearch: (x: string) => void,
}
type SortType = '' | 'asc' | 'desc'

export TodoAddFormProps, TodoItemProps, TodoListProps, Item, TodoEditFormProps, SortType;