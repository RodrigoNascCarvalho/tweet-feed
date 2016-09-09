import { connect } from 'react-redux';
import { setTweetOrder } from '../actions';
import OrderGroup from '../components/OrderGroup';

const mapStateToProps = (state, ownProps) => {
	return state.tweetOrder;
};

const mapDispatchToProps = (dispatch, ownProps) => {
	let isAscending = true;

	return {
		onAscendingClick: () => {
			dispatch (setTweetOrder(ownProps.order, isAscending));
		},
		onDescendingClick: () => {
			dispatch (setTweetOrder(ownProps.order, !isAscending));
		}
	}
};

const OrderGroupMapper = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderGroup);

export default OrderGroupMapper;