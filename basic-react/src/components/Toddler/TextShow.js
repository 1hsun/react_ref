//@flow
//props been defined as child of TextInput.
import React from 'react';
import PropTypes from 'prop-types';
//{text:string} regulated thru flow
const TextShow = (props: { text: string }) => (
    <h1>{props.text}</h1>
)
TextShow.defaultProps = {
    text: 'Time to input some...'
}
//type verfying
TextShow.propTypes = {
    text: PropTypes.string.isRequired
    //no more React.PropTypes
}
export default TextShow