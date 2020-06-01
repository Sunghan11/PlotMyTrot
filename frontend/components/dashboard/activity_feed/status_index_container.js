import {connect} from 'react-redux';
import StatusIndex from './status_index';
import {fetchStatuses, deleteStatus} from '../../../actions/status_actions';
// import {fetchComments} from '../../../actions/comment_actions';

const msp = state => ({
    statuses: Object.values(state.entities.statuses),
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    fetchStatuses: () => dispatch(fetchStatuses()),
    deleteStatus: statusId => dispatch(deleteStatus(statusId)),
    // fetchComments: () => dispatch(fetchComments())
});

export default connect(msp, mdp)(StatusIndex);