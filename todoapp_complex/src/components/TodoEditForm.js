//@flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onFetchUpdateItem } from '../actions/items';
import type { TodoEditFormProps } from '../definitions/TodoTypeDefinition';
const TodoEditForm = ({ id, isCompleted, title, onFetchUpdateItem }: TodoEditFormProps) => {
  let titleField: any = null
  return (
    <li>
      <input
        type="text"
        defaultValue={title}
        ref={el => { titleField = el }}
        autoFocus
        onBlur={(e) => {
          if (titleField.value.trim() && e.target instanceof HTMLInputElement) {
            if(isCompleted){
              onFetchUpdateItem({
                id,
                title: titleField.value,
                isCompleted: !isCompleted,
                isEditing: false
              })
            }else {
              onFetchUpdateItem({
                id,
                title: titleField.value,
                isCompleted,
                isEditing: false
              })
            }
            
          }
        }}
        onKeyPress={(e) => {
          if (titleField.value.trim() && e.target instanceof HTMLInputElement && e.key === 'Enter') {
            onFetchUpdateItem({
              id,
              title: titleField.value,
              isCompleted: !isCompleted,
              isEditing: false
            })
          }
        }}
      />
    </li>
  )
}
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ onFetchUpdateItem }, dispatch)
);
export default connect(null, mapDispatchToProps)(TodoEditForm);