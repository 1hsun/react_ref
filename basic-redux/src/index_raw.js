// @flow
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

//# Reducer
function dealItem(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [{
        id: action.payload.id,
        text: action.payload.text,
      }, ...state]//unshift
    case 'DEL_ITEM'://回傳不含action.id的Array.
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}
/*
//@Store
store = createStore(reducer)
const store = createStore(addItem) 
//use redux dev tools
*/
const store = createStore(addItem, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class MyComponent extends React.Component {
  state: { inputValue: ?string }
  constructor(props) {
    super(props)
    this.state = { inputValue: '' }
  }
  handleChange = (event: KeyboardEvent) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({
        inputValue: event.target.value,
      })
    }
  }
  handleClick = () => {
    store.dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: +newDate(),
        text: this.state.inputValue,
      },
    })
    this.setState({
      inputValue: '',
    })
  }
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>
            Add Item
          </button>
        </div>
        <p>
          {
            store.getState().map(item => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  onClick={() => {
                    store.dispatch({type:'DER_ITEM', id:item.id})
                  }}
                />
                {item.text}
              </li>
            ))
          }
        </p>
      </div>
    )
  }
}
const render = () => ReactDOM.render(
  <MyComponent />,document.getElementById('root')
)
//execute stage
render()
store.subscribe(render)//subscribe to 'reRender' if state gets updated.

    //pure JS, GET state to render on page.
// function render() {
//   const items = store.getState().map(item => (
//     (item) ? `<li>${item}</li>` : ''
//   ))
//   document.getElementById('itemlist').innerHTML = `<ul>${items.join('')}</ul>`
// }
// //execute stage
// render()
// store.subscribe(render)//subscribe to 'reRender' if state gets updated.

// const itemAdd = document.getElementById('itemadd');
// itemAdd.addEventListener('click', () => {
//   //monitoring itemadd to trigger Store "dispatch" action.
//   const itemText = document.getElementById('itemText')
//   if (itemText instanceof HTMLInputElement) {
//     store.dispatch({ type: 'ADD_ITEM', text: itemText.value });
//     itemText.value = '';
//   }
// })
