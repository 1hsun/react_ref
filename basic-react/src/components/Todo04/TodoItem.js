import React from 'react';
import type { TodoItemProps } from '../../definition/TodoTypeDefinition';
const TodoItem = ({ title, isCompleted, onItemClick, onItemDoubleClick }:TodoItemProps) => (
    <li
        onDoubleClick={onItemDoubleClick}
        className={isCompleted
            ? 'list-group-item list-group-item-danger animated flash'
            : 'list-group-item list-group-item-success animated bounceIn'
        }
    >
        <input
            type="checkbox"
            defaultChecked={isCompleted}
            onClick={onItemClick}
        />
        {' '}
        {title}
    </li>
)
export default TodoItem