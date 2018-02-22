import {handleActions, handleAction} from 'redux-actions';
import Uistate from '../../constants/models';

export default handleActions({
    SHOW:(state, {payload}) => (
        state.set('todos',payload.todo)
    ),
},UiState);