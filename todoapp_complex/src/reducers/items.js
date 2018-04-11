//@flow
import { ADD_ITEM, DEL_ITEM, UPDATE_ITEM, INIT_ITEMS } from '../constants/actionTypes';
import type { Item } from '../definitions/TodoTypeDefinition';

export default function items(state: Array<Item> = [], action: Object) {
  switch (action.type) {
    case ADD_ITEM:
      return [action.payload, ...state]
    case DEL_ITEM:
      {
        return state.filter(item => item.id !== action.payload.id)
      }
    case UPDATE_ITEM:
      {
        const newItems = [...state]
        const index = newItems.findIndex((item) => item.id === action.payload.id)
        //no result, go original.
        if (index === -1) return newItems;
        //found it, update it.
        newItems[index] = action.payload;
        return newItems;
      }
    case INIT_ITEMS:
      return [...action.payload];//payload:Array<Item>
    default:
      return state
  }
}