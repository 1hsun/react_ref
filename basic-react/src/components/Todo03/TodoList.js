//@flow
import React from 'react';
import type {TodoListProps} from '../../definition/TodoTypeDefinition';
const TodoList = ({children}:TodoListProps) => (
    <ul>{children}</ul>
)
export default TodoList;