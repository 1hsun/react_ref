//@flow
import React from 'react';
import type { TodoAddFormProps } from '../../definition/TodoTypeDefinition';

const TodoAddForm = ({ placeholderText, onItemAdd }: TodoAddFormProps) => {
    let titleField: any = null;//unsure type, go any.
    return (
        <div>
            <input
                type="text"
                ref={el => { titleField = el }}//use ref to get input element
                placeholder={placeholderText}
                onKeyPress={(e) => {
                    if (titleField.value.trim()
                        && e.target instanceof HTMLInputElement
                        && e.key === 'Enter') {
                        onItemAdd({
                            id: +new Date(),//use to replace as key temporarily
                            title: titleField.value,
                            isCompleted: false,
                        })
                        titleField.value = '';//input go blank
                    }
                }}
            />
        </div>
    )
}
export default TodoAddForm;