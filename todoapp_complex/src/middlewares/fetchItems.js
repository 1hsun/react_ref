//@flow
import { FETCH_LOAD_ITEMS } from '../constants/actionTypes';
const fetchItems = (store: any) => (next: any) => (action: Object) => {
  //precheck
  if (action.type !== FETCH_LOAD_ITEMS) return next(action);
  //go fetch, then call action.cb
  fetch('http://localhost:5555/items?_sort=id&_order=DESC', { method: 'GET' })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json();
    })
    .then(itemList => {
      //reconstruct items, isEditing was missing.
      const items = itemList.map((item) => {
        return Object.assign({}, item, { isEditing: false });
      });
      return action.cb(items, store.dispatch);
    })
    .catch((error) => { throw new Error(error.message) })
}
export default fetchItems;