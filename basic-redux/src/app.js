//@flow
import React from 'react';
// import { connect } from 'react-redux'
// import * as actionCreators from './action';
import ItemList from './ItemList';
import ItemInput from './ItemInput';

const MyComponent = () => (
  <div>
    <ItemInput />
    <ItemList />
  </div>
)
export default MyComponent;
// class MyComponent extends React.Component {
//   state: { inputValue: string }//@flow
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: ''
//     }
//   }
//   handleItemAdd = () => {
//     this.props.onItemAdd({
//       id: +new Date(),
//       text: this.state.inputValue,
//     })
//     this.setState({
//       inputValue: ''
//     })
//   }
//   handleTextChange = (event: KeyboardEvent) => {
//     if (evnet.target instanceof HTMLInputElement) {
//       this.setState({
//         inputValue: event.target.value,
//       })
//     }
//   }
//   render() {
//     const { items, onItemDel } = this.props;
//     return (
//       <div>
//         <div>
//           <input
//             type="text"
//             value={this.state.inputValue}
//             onChange={this.handleTextChange}
//           />
//           <button
//             onClick={this.handleItemAdd}
//           >項目新增
//           </button>
//         </div>
//         <p>
//           {
//             items.map(item => (
//               <li key={item.id}>
//                 <input
//                   type="checkbox"
//                   id={item.id}
//                   onClick={() => onItemDel(item.id)}//reducer:filter !==item.id
//                 />
//                 {item.text}
//               </li>
//             ))
//           }
//         </p>
//       </div>
//     )
//   }
// }
// //prepare for store → props
// const mapStateToProps = store => (
//   { items: store.items }//(store.getState()).items
// )
// //connect Redux, store & actionCreators → props
// export default connect(mapStateToProps, actionCreators)(MyComponent)
