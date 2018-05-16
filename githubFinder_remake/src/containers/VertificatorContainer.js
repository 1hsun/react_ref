import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Vertificator from '../components/Vertificator';

const mapStateToProps = (store) => {
  console.log(store.gotUser.data)
  return ({ data: store.gotUser.data })
};
export default withRouter(connect(mapStateToProps)(Vertificator));