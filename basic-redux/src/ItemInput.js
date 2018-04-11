import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './action';
const ItemInput = (props: any) => {
  let input: any = null;
  const { onItemAdd, onFetchData } = props;//解構賦值
  return (
    <form onSubmit={(e: Event) => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      //do onItemAdd as actionCreator
      onItemAdd(input.value)
      input.value = ''
    }}>
      <input ref={(node: any) => { input = node }} />
      <button type="submit">項目新增</button>
      <button onClick={() => onFetchData()}>FetchFromServer</button>
    </form>
  )
}
//Connect Redux Store, since misson here is to Input, need no store items to props.(w/o mapStateToProps)
export default connect(null, actionCreators)(ItemInput);