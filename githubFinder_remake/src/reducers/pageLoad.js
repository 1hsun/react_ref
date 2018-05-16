//@flow
import { SEARCHING } from '../constants/actionTypes'
// import {uiProps} from '../constants/componentTypes'

const pageLoad = (state: { isSearching: boolean } = { isSearching: false }, action: Object) => {
  switch (action.type) {
    case SEARCHING:
      {
        console.log('SEARCHING launch %s', state.isSearching)
        // let isSearching = true;
        return {isSearching: !state.isSearching}
      }
    // to prevent there is no props input
    default:
      return state
  }
}
export default pageLoad;