import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ResultPage from '../components/ResultPage';

const mapStateToProps = (store) => ({ data: store.gotUser.data })
export default withRouter(connect(mapStateToProps)(ResultPage));