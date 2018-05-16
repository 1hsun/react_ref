//@flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import HomePageProps from '../constants/componentTypes';
import PageLoading from '../components/PageLoading';

class HomePage extends Component {
  // state: {
  //   isSearching: Boolean,
  // }
  // constructor(props) {
  //   super(props);
  //   // const { dispatch } = props;
  //   // this.state = {//default state
  //   //   isSearching: false,
  //   // }
  // }
  render() {
    let { onSubmitUserId, onSearching } = this.props
    let inputField: any = null;//flowCheck
    return (
      <div>
        <TextField
          hintText="Github UserID"
          ref={el => { inputField = el }}
          onKeyPress={(e) => {
            if (inputField.getValue().trim() && e.target instanceof HTMLInputElement && e.key === 'Enter') {
              onSubmitUserId({
                userId: inputField.getValue(),
              });
              onSearching()
              inputField.value = '';
            }
          }}
        />
        {/* <Link to={{
        pathname: '/result',
        query: userId
      }}> */}
        <RaisedButton
          label="Submit"
          onClick={() => {
            onSubmitUserId({
              userId: inputField.getValue(),
            });
            inputField.value = '';
          }}
          primary
        />
        {/* </Link> */}
        {(this.props.isSearching === true) ? <PageLoading /> : null}
      </div>
    )
  }
};
export default HomePage;