import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
// import LinearProgress from 'material-ui/LinearProgress';

const PageLoading = () => (
  <div>
    <CircularProgress size={60} thickness={5}/>
    {/* <LinearProgress mode="indeterminate" /> */}
  </div>
)
export default PageLoading;