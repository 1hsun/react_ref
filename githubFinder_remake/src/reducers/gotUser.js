//@flow
// import { handleActions } from 'redux-actions'
import { GOT_DATA } from '../constants/actionTypes';
import type { payloadProps } from '../constants/componentTypes';
// import { GithubState } from '../constants/models';

export default function gotUser(state: Array<payloadProps> = [], action: Object) {
  switch (action.type) {
    case GOT_DATA:
      {
        // state.merge({ data: action.payload })
        console.log('GOT_DATA called.')
        return { data: action.payload };
      }
    default:
      return state
  }
}