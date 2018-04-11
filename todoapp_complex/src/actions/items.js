//@flow
import {
  INIT_ITEMS,
  ADD_ITEM,
  UPDATE_ITEM,
  DEL_ITEM,
  SORT_ITEMS,
  SEARCH_ITEMS,
  TOGGLE_FILTER,
  FETCH_ADD_ITEM,
  FETCH_DEL_ITEM,
  FETCH_LOAD_ITEMS,
  FETCH_UPDATE_ITEM
} from '../constants/actionTypes';
import type { Item } from '../definitions/TodoTypeDefinition';

const onInitData = (items: Array<Object>) => (
  { type: INIT_ITEMS, payload: items }
);//after doing 'onFetchLoadItems'
const onItemAdd = (payload: Item) => (
  { type: ADD_ITEM, payload }
);//after doing 'onFetchAddItem', as Reducer
const onItemDel = (payload: Item) => (
  { type: DEL_ITEM, payload }
)//after doing 'onFetchDelItem', as Reducer
const onItemUpdate = (payload: Item) => (
  { type: UPDATE_ITEM, payload }
);//after doing 'onFetchUpdateItem',as Reducer
const onItemEdit = (payload: Item) => (
  { type: UPDATE_ITEM, payload }
);//after doing 'onFetchDelItem', as Reducer
const onItemSearch = (payload: { keyword: string }) => (
  { type: SEARCH_ITEMS, payload }
);
const onItemSort = (payload: { direction: string }) => (
  { type: SORT_ITEMS, payload }
);
const onItemFilterOut = () => (
  { type: TOGGLE_FILTER }
);//show completed or not.
const onFetchLoadItems = () => (
  {
    type: FETCH_LOAD_ITEMS,
    cb: (res: Array<Item>, dispatch: Function) => dispatch(onInitData(res))
  }
);//use Middleware thru 'cb' @middleware/fetchItems, GET method.
const onFetchAddItem = (payload: Item) => (
  {
    type: FETCH_ADD_ITEM,
    payload,
    cb: (res: Item, dispatch: Function) => dispatch(onItemAdd(res))
  }
);//use Middleware thru 'cb' @middleware/addItem, POST method.
const onFetchUpdateItem = (payload: Item) => (
  {
    type: FETCH_UPDATE_ITEM,
    payload,
    cb: (res: item, dispatch: Function) => dispatch(onItemUpdate(res))
  }
)//use Middleware thru 'cb'@middleware/updateItem, PUT method.
const onFetchDelItem = (payload: Item) => (
  {
    type: FETCH_DEL_ITEM,
    payload,
    cb: (res: item, dispatch: Function) => dispatch(onItemDel(res))
  }
)//use Middleware thru 'cb'@middleware/updateItem, DEL method.
export { onInitData, onItemAdd, onItemEdit, onItemFilterOut, onItemSearch, onItemSort, onItemUpdate, onFetchAddItem, onFetchDelItem, onFetchLoadItems, onFetchUpdateItem }