import React from 'react';
import type { TodoItemProps } from '../../definition/TodoTypeDefinition';
const TodoItem = ({title, style, onItemClick}:TodoItemProps) => (
    <li
        onClick={() => {onItemClick()}}
        style={style}
    >
    {title}
    </li>
)
export default TodoItem;
