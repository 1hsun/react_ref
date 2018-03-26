//@flow
import React from 'react';
import PropTypes from 'prop-types';
type Props = {
    text:string,
    index:number,
    onItemClick:func,
    style:object
}
const TodoItem = (props:Props) => {
    const handleClick = () => {
        props.onItemClick(props.index)//like bubble pass the func
    };
    return <li onClick={handleClick} style={props.style}>{props.text}</li>;
}
TodoItem.propTypes = {
    text:PropTypes.string.isRequired,
    index:PropTypes.number.isRequired,
    onItemClick:PropTypes.func,
    style:PropTypes.object
}
export default TodoItem;
