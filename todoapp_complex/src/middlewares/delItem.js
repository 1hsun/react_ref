//@flow
import { FETCH_DEL_ITEM } from '../constants/actionTypes';
const delItem = (store: any) => (next: any) => (action: Object) => {
  if (action.type !== FETCH_DEL_ITEM) return next(action)
  const { id } = action.payload;
  const deletedId = {id};
  // console.log('Ready to go fetch \'DEL\'');
  fetch(`http://localhost:5555/items/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json();
    })//no res, replace it by deletedId
    .then(action.cb(deletedId, store.dispatch))
    .catch((err) => console.error(err))
}
export default delItem;