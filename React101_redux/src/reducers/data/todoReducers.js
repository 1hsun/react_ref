import { handleActions, handleAction } from 'redux-actions';
import { TodoState } from '../../constants/models';

import {
    CREATE_TODO,
    DELETE_TOOD,
    CHANGE_TEXT,
} from '../../constants/actionTypes';

const todoReducers = handleActions({
    CREATE_TODO: (state) => {
        let todos = state.get('todos').push(state.get('todo'));
        return state.set('todos', todos)
    },
    DELETE_TOOD: (state, { payload }) => (
        state.set('todos', state.get('todos').splice(payload.index, 1))
    ),
    CHANGE_TEXT: (state, { payload }) => (
        state.merge({ 'todo': payload })
    )
}, todoState);

export default todoReducers;
