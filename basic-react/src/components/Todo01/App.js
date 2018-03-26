import React, { Component } from 'react';
import TodoList from './TodoList'
class App extends Component{
    render() {
        return (
            <TodoList text="it's started today." />
        );
    }
}

export default App;