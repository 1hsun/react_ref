import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GithubBox from '../components/GithubBox';
import { onSearching } from '../actions/getGithub';

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ onSearching }, dispatch)
)
export default connect(null, mapDispatchToProps)(GithubBox);