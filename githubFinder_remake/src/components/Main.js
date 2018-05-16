import React from 'react';
import AppBar from 'material-ui/AppBar';
// import { MainProps } from '../constants/componentTypes';
import HomePageContainer from '../containers/HomePageContainer';

const Main = () => {
  return (
    <div>
      <AppBar
        title="Github Finder"
        showMenuIconButton={false}
      />
      <HomePageContainer />
  </div>)
}
export default Main;