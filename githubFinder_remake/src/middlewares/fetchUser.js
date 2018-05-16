//@flow
import 'whatwg-fetch';//browser version insurance
import history from '../history';
import { FETCH_DATA } from '../constants/actionTypes';
const fetchUser = (store: any) => (next: any) => (action: Object) => {
  //precheck
  if (action.type !== FETCH_DATA) return next(action);
  const { userId } = action.payload;
  console.log('===go Fetching %s===', userId)
  fetch(`https://api.github.com/users/${userId}`)
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    })
    .then((json) => {
      const payload = Object.assign({}, json, { authed: true })
      // console.log(payload.authed);
      action.cb(payload, store.dispatch)
      history.push('/result')
    })
    .catch((err) => console.error(err))
}
export default fetchUser;