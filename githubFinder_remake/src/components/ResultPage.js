//@flow
import React from 'react';
// import GithubBox from './GithubBox';
import GithubBoxContainer from '../containers/GithubBoxContainer'
import AppBar from 'material-ui/AppBar';
import type { parentProps } from '../constants/componentTypes'

// const ResultPage = ({userId, avatar_url, followers, following}:payloadProps) => (
const ResultPage = ({ data }: parentProps) => (
  // <div onLoad={console.log('ResultPage Loaded.')} >
  <div>
    <AppBar
      title="GithubFinder Gives You..."
      showMenuIconButton={false}
    />
    <GithubBoxContainer data={data} />
  </div>
)
export default ResultPage;