import { FETCH_ITEMS } from './actionTypes';

const fetchMiddleware = (store: any) => (next: any) => (action: Object) => {
  //actionTypes checking, middleware process precheck.
  if(action.type !== FETCH_ITEMS) return next(action);
  //Go fetch, will do `action.cb(json, store.dispatch)` which `cb` attribute belongs to `onFetchData`
  fetch('http://localhost:5555/items/')
  .then(res => res.json())
  .then(json => action.cb(json, store.dispatch))
  .catch((err) => {throw new Error(err.message)})
}
export default fetchMiddleware;