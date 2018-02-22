//@flow
import React from 'react'
//being regulated thru 'flow'
const TextShow = (props: { text: string }) => (
    <h1>{props.text}</h1>
)
TextShow.propsTypes = {
    text: React.PropsTypes.string.isRequired
}
export default TextShow
