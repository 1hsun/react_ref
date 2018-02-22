import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';
import todo from './data/todoReducers';

const rootReducer = combineReducers({
    todo,
}); //use dataflow only

export default rootReducer;
