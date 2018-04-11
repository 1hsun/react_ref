//@flow
import { SORT_ITEMS } from '../constants/actionTypes';
export default function sortType(state: { direction: string } = { directoin: 'no' }, action: Object) {
  switch (action.type) {
    case SORT_ITEMS:
      {//Function unplugged and set @App to render
        return Object.assign({}, { direction: action.payload.direction })
      }
    default:
      return state
  }
}