//@flow
import React from 'react';
import Proptypes from 'prop-types';
import TodoItem from './TodoItem';
type Props = {
    initText: string,
}
class TodoList extends React.Component {
    state: {//type setting.
        items: Array<string>,
        inputValue: string,
    }
    constructor(props: Props) {
        super(props)
        this.state = {//default state setting.
            items: [],
            inputValue: '',
        }
    }
    handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement) {
            this.setState({
                inputValue: e.target.value,
            })
        }
    }
    handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Enter' && e.target instanceof HTMLInputElement) {
            const newItems = [e.target.value, ...this.state.items];
            this.setState({
                items: newItems,
                inputValue: '',
            })
        }
    }
    handleRemoveItem = (index: number) => {
        const oldItems = this.state.items
        //切至傳入index前成段，再至index下一者切成段，後合併獨缺index指向值
        const newItems = oldItems.slice(0, index).concat(oldItems.slice(index + 1))
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
                <ul>
                    {
                        this.state.items.map((value, index) => {
                            return <TodoItem
                                key={index}
                                text={value}
                                index={index}
                                onItemClick={this.handleRemoveItem}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
}
TodoList.defaultProps = {
    initText:'This is where Todo start it.'
}
TodoList.proptypes = {
    initText: Proptypes.string.isRequired,
}
export default TodoList;