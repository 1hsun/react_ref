import React, { Component } from 'react';
import TodoList from './TodoList'
import TodoEditForm from './TodoEditForm';
import TodoAddForm from './TodoAddForm';
import TodoItem from './TodoItem';
import type {Item} from '../../definition/TodoTypeDefinition';
class App extends Component {
    state: {
        items: Array<Item>,
    }
    constructor() {
        super()
        this.state = {//default value
            items: [],
        }
    }
    handleItemAdd = (aItem: Item) => {
        const newItems = [aItem, ...this.state.items];
        this.setState({
            items: newItems,
        })
    }
    handleStylingItem = (index: number) => {
        const newItems = [...this.state.items];
        newItems[index].isCompleted = !newItems[index].isCompleted;
        this.setState({
            items: newItems,
        })
    }
    handleEditItem = (index: number) => {
        const newItems = [...this.state.items];
        newItems[index].isEditing = !newItems[index].isEditing;
        this.setState({
            items: newItems,
        })
    }
    handleEditItemUpdate = (index: number, title: string) => {
        const newItems = [...this.state.items];
        newItems[index].title = title;//refresh new title
        newItems[index].isEditing = !newItems[index].isEditing;
        this.setState({
            items: newItems,
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <h3 className="panel-title">TodoApp</h3>
                        </div>
                        <div className="panel-body">
                            <TodoAddForm
                                placeholderText="Todos InputHere."
                                onItemAdd={this.handleItemAdd}
                            />
                            <TodoList>
                                {
                                    this.state.items.map((item, index) => (
                                        (item.isEditing)
                                            ? <TodoEditForm
                                                key={item.id}
                                                title={item.title}
                                                onItemUpdate={(title) => {
                                                    this.handleEditItemUpdate(index, title)
                                                }}
                                            />
                                            : <TodoItem
                                                key={item.id}
                                                isCompleted={item.isCompleted}
                                                title={item.title}
                                                onItemDoubleClick={() => { this.handleEditItem(index) }}
                                                onItemClick={() => { this.handleStylingItem(index) }}
                                            />
                                    ))
                                }
                            </TodoList>
                        </div>
                        <div className="panel-footer">DoubleClick toEdit.</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;