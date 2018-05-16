import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import { onSubmitUserId, onSearching } from '../actions/getGithub';

const mapStateToProps = store => ({ isSearching: store.pageLoad.isSearching });
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ onSubmitUserId, onSearching }, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
// export default connect(null, mapDispatchToProps)(HomePage)
