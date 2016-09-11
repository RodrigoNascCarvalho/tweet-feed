import { connect } from 'react-redux';
import { setTweetFilter } from '../actions';
import FilterSelection from '../components/FilterSelection';

const mapStateToProps = (state) => {
	return state.filterQuery;
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSelect: (target) => {
			let filter = target.value;
			let options = target.options;
			let filterType = options[options['selectedIndex']].getAttribute('data-type');

			dispatch (setTweetFilter(filter, filterType));
		}
	}
};

const FilterSelectionMapper = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterSelection);

export default FilterSelectionMapper;