//@flow
// import { createAction } from 'redux-actions';
import { GOT_DATA, FETCH_DATA, SEARCHING } from "../constants/actionTypes";
import type { payloadProps } from '../constants/componentTypes';

//## Reducer dispatching
// export const onChangeUserId = () => (

// )
export const onSearching = () => (
  { type: SEARCHING }
)
export const onCatchUserId = (payload: payloadProps) => (
  { type: GOT_DATA, payload }
)
//## Middleware applying
export const onSubmitUserId = (payload: payloadProps) => (
  {
    type: FETCH_DATA,
    payload,
    cb: (res: payloadProps, dispatch: Function) => dispatch(onCatchUserId(res))
  }
)