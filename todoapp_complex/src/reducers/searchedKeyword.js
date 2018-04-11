import { SEARCH_ITEMS } from '../constants/actionTypes';
export default function searchedKeyword(state: { keyword: string } = { keyword: '' }, action: Object) {
  switch (action.type) {
    case SEARCH_ITEMS:
      {//Function unplugged and set @App to render
        return Object.assign({}, { keyword: action.payload.keyword })
      }
    default:
      return state
  }
}