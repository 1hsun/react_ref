import React, { Component } from 'react';
import TodoAddForm from './TodoAddForm';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import type { Item } from '../../definition/TodoTypeDefinition'
import styles from '../../style/styles';

class App extends Component {
  state: {//state structure
    items: Array<Item>,
  }
  constructor() {//constructor for accessing React Component
    super();
    this.state = {//default
      items: [],
    }
  }
  handleItemAdd = (aItem: Item) => {
    const newItems = [aItem, ...this.state.items];
    this.setState({
      items: newItems,
    });
  }
  handleStylingItem = (index: number) => {
    const newItems = [...this.state.items];
    newItems[index].isCompleted = !newItems[index].isCompleted;
    this.setState({
      items: newItems,
    });
    console.log(newItems[index].isCompleted);
  }
  render() {
    return (
      <div>
        <TodoAddForm placeholderText="Go SmarterTODO." onItemAdd={this.handleItemAdd} />
        <TodoList>
          {
            this.state.items.map((item, index) => (
              <TodoItem
                key={item.id}
                style={item.isCompleted ? styles.itemCompleted : styles.itemNormal}
                title={item.title}
                onItemClick={() => { this.handleStylingItem(index) }}
              />
            ))
          }
        </TodoList>
      </div>
    )
  }
}
export default App
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
