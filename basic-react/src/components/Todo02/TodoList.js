//@flow
import React, { KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

type Item = {
    text: string,
    isCompleted: boolean,
}
type Props = {
    initText: string,
}
class TodoList extends React.Component {
    state: {
        items: Array<Item>,
        inputValue: string,
    }
    constructor(props: Props) {
        super(props);
        this.state = {//default status
            items: [],
            inputValue: '',
        }
    }
    handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement) {//for flow
            this.setState({
                inputValue: e.target.value
            })
        }
    }
    handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Enter' && e.target instanceof HTMLInputElement) {
            const aItem = { text: e.target.value, isCompleted: false };
            const newItems = [aItem, ...this.state.items];
            this.setState({
                items: newItems,
                inputValue: '',
            })
        }

    }
    handleStylingItem = (index: number) => {
        const newItems = [...this.state.items];
        newItems[index].isCompleted = !newItems[index].isCompleted;
        this.setState({
            items: newItems,
        })
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputValue}
                    placeholder={this.props.initText}
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleChange}
                />
                <h2>{this.state.items.length===0?this.props.text:''}</h2>
                <ul>
                    {
                        this.state.items.map((item, index) => {
                            return <TodoItem
                                key={index}
                                style={item.isCompleted ? { color: 'red', textDecoration: 'line-through' } : { color: 'green' }}
                                text={item.text}
                                index={index}
                                onItemClick={this.handleStylingItem}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
}
TodoList.defaultProps = {
    initText: 'Go styled Todo.'
}
TodoList.propTypes = {
    initText: PropTypes.string.isRequired,
}
export default TodoList;
