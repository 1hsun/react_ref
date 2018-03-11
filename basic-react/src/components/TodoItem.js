//@flow
import React from 'react';
import PropTypes from 'prop-types'
type Props = {
    text:string,
    index:number,
    onItemClick:func,
}
const TodoItem = (props:Props) => {
    const handleClick = () => {//取得父層的onItemCLick事件
        //as childe components of TodoIndex
        props.onItemClick(props.index)
    }
    return <li onClick={handleClick}>{props.text}</li>;//繼承後執行之
}
TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    index:PropTypes.number.isRequired,
    onItemClick:PropTypes.func,
}
export default TodoItem