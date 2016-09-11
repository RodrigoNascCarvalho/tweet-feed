import { connect } from 'react-redux';
import { setTweetOperator } from '../actions';
import OperatorSelection from '../components/OperatorSelection';

const mapStateToProps = (state) => {
	return {
		filterOption: state.filterQuery.filterType 
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSelect: (target) => {
			let operator = target.value;
			
			dispatch (setTweetOperator(operator));
		}
	}
};

const OperatorSelectionMapper = connect(
	mapStateToProps,
	mapDispatchToProps
)(OperatorSelection);

export default OperatorSelectionMapper;