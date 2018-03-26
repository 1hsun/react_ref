//@flow
import React from 'react';
import PropTypes from 'prop-types';
import TextShow from './TextShow';

type Props = {
    initText: string,
}
class TextInput extends React.Component {
    state: {
        text: string
    }
    constructor(props: Props) {
        super(props);//super() to inherit parent 
        this.state = { text: '' }//default setting
    }
    handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement) {//flow check
            this.setState({ text: e.target.value })
        }
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.text}
                    placeholder={this.props.initText}
                    onChange={this.handleChange}
                />
                <TextShow text={this.state.text} />
                {/* <h1> */}
            </div>
        )
    }
}
TextInput.defaultProps = {
    initText:'This is where you start it.'
}
//prop type warning
TextInput.propTypes = {
    initText: PropTypes.string.isRequired
    //no more React.PropTypes
}
export default TextInput;