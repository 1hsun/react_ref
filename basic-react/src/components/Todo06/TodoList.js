//@flow
import React from 'react';
import type { TodoListProps } from '../../definition/TodoTypeDefinition';
const TodoList = ({ children, onItemFilter, onItemSort, sortType }: TodoListProps) => {
	let sortTypeIndex: number = ['', 'asc', 'desc'].findIndex((value) => value === sortType);//透過VALUE.findIndex回傳NUM
	return (
		<div>
			<label>
				<input
					type="checkbox"
					defaultChecked
					onClick={onItemFilter}
				/>
				顯示已完成
      </label>
			<button
				className={(sortTypeIndex === 0) ? 'btn btn-default' : 'btn btn-primary'}
				onClick={() => { onItemSort((sortType === 'asc') ? 'desc' : 'asc') }}
				disabled={React.Children.count(children) ? false : true}//no child go disabled.
			>
				Do Sorting: {['沒有', '少→多', '多→少'][sortTypeIndex]}
			</button>
			<ul className="list-group">{children}</ul>
		</div>
	)
}
export default TodoList;