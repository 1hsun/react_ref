//@flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { onItemEdit, onFetchUpdateItem, onFetchDelItem } from '../actions/items';
import type{ TodoItemProps } from '../definitions/TodoTypeDefinition';
const TodoItem = ({ id, title, isCompleted, onFetchUpdateItem, onFetchDelItem, onItemEdit }: TodoItemProps) => (
  <li
    onDoubleClick={() => {
      onItemEdit({
        id, title, isCompleted, isEditing: true
      })
    }}
    id="todoitem_li"
    className={isCompleted ? 'list-group-item list-group-item-danger animated flash'
      : 'list-group-item list-group-item-success animated bounceIn'}
  >
    <input
      type="checkbox"
      defaultChecked={isCompleted}
      onClick={() => {
        onFetchUpdateItem({ id, title, isCompleted: !isCompleted, isEditing: false })
      }}
    />
    {' '}
    {title}
    <button
      className="btn btn-danger"
      id="todoitem_del_btn"
      onClick={() => {
        onFetchDelItem({ id })
      }}
    >
      Delete It
    </button>
  </li>
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ onItemEdit, onFetchUpdateItem, onFetchDelItem }, dispatch)
);
export default connect(null, mapDispatchToProps)(TodoItem);