import { connect } from 'react-redux';
import { triggerFilter } from '../actions';
import FilterQuery from '../components/FilterQuery';

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (value) => {
			dispatch(triggerFilter(value));
		}
	}
};

const FilterQueryMapper = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterQuery);

export default FilterQueryMapper;