//@flow
import { ADD_ITEM, DEL_ITEM, FETCH_ITEMS, LOAD_ITEMS } from './actionTypes';

//payload in
export const onItemAdd = (text: string) => (
  { type: ADD_ITEM, id: +new Date(), text }
);
export const onItemDel = (id: number) => (
  { type: DEL_ITEM, id }
);
//reload items on reducer
export const onLoadData = (items: Array<Object>) => (
  { type: LOAD_ITEMS, items }
)
//副作用函式，真正的執行程式碼在fetchMiddleware裡，執行後會到這個函式來
export const onFetchData = () => (
  {
    type: FETCH_ITEMS,
    cb: (res: Array<Object>, dispatch: Function) =>
      dispatch(onLoadData(res))
  }
  //cb will be called by @fetchMiddleware, action.cb(json,store.dispatch)
)