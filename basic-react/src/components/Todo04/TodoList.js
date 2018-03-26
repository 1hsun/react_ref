import React from 'react';
import type { TodoListProps } from '../../definition/TodoTypeDefinition';
const TodoList = ({ children }: TodoListProps) => (
    <ul
        className="list-group">
        {children}
    </ul>
);
export default TodoList;