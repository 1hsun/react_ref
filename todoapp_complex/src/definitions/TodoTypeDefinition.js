//@flow
import { onFetchAddItem, onFetchUpdateItem, onItemFilterOut } from "../actions/items";

type Item = {
    id: number,
    title: string,
    isCompleted: boolean,
    isEditing: boolean,
};
type SortType = '' | 'asc' | 'desc';

type TodoListProps = {
    children?: React$Element<*>,
    onItemFilterOut: func,
    onItemSort: func,
    sortType: string
};
type TodoItemProps = {
    id: number,
    title: string,
    isCompleted: boolean,
    onFetchUpdateItem: func,
    onItemClick: func,
};
type TodoAddFormProps = {
    placeholderText: string,
    onFetchAddItem: (x: Item) => void,
};
type TodoEditFormProps = {
    id: number,
    title: string,
    isCompleted: boolean,
    onFetchUpdateItem: func,
}
type TodoSearchFormProps = {
    placeholderText: string,
    onItemSearch: func,
}


export { TodoAddFormProps, TodoItemProps, TodoListProps, Item, TodoEditFormProps, SortType, TodoSearchFormProps };