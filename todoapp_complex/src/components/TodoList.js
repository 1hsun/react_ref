//@flow
import React from 'react';
import type { TodoListProps } from '../definitions/TodoTypeDefinition.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onItemFilterOut, onItemSort } from '../actions/items';
const TodoList = ({ children, onItemFilterOut, onItemSort, sortType }: TodoListProps) => {
  let sortTypeIndex: number = ['no', 'asc', 'desc'].findIndex((value) => value === sortType);
  return (
    <div >
      <div id="todooption">
        <label>
          <input
            type="checkbox"
            defaultChecked
            onClick={onItemFilterOut}
          />
          Completed included
      </label>
        <button
          className={(sortTypeIndex === 0) ? 'btn btn-default' : 'btn btn-success'}
          onClick={() => { onItemSort({ direction: (sortType === 'asc') ? 'desc' : 'asc' }) }}
          disabled={(React.Children.count(children)) ? false : true}
        >
          Sorting as: {['None', 'Ascending', 'Descending'][sortTypeIndex]}
        </button>
      </div>
      <ul className="list-group">
        {children}
      </ul>
    </div>
  )
}
const mapStateToProps = store => ({ sortType: store.sortType.direction });
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ onItemFilterOut, onItemSort }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
