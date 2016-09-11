import { combineReducers } from 'redux';
import {
	SET_TWEET_ORDER,
	REQUEST_TWEETS,
	RECEIVE_TWEETS,
	SET_FILTER,
	SET_OPERATOR,
	SET_FILTER_QUERY
} from '../actions';
import Immutable from 'immutable';

function tweetOrder(state = { order: 'BY_DATE', isAscending: false }, action) {
	switch (action.type) {
		case SET_TWEET_ORDER:
			return Immutable
					.fromJS(state)
					.set('order', action.order)
					.set('isAscending', action.isAscending)
					.toJS();
		default:
			return state;
	}
}

function setFilter (state = {filter: '', filterType: ''}, action) {
	switch (action.type) {
		case SET_FILTER:
			return Immutable
					.fromJS(state)
					.set('filter', action.filter)
					.set('filterType', action.filterType)
					.toJS();
		default:
			return state;
	}
}

function setOperator (state = {operator: ''}, action) {
	switch (action.type) {
		case SET_OPERATOR:
			return Immutable
					.fromJS(state)
					.set('operator', action.operator)
					.toJS();
		default:
			return state;
	}
}

function setFilterQuery (state = {query: ''}, action) {
	switch (action.type) {
		case SET_FILTER_QUERY:
			return Immutable
					.fromJS(state)
					.set('query', action.query)
					.toJS();
		default:
			return state;
	}
}

function filterQuery (state = {}, action) {
	switch(action.type) {
		case SET_FILTER:
			return setFilter(state, action);
		case SET_OPERATOR:
			return setOperator(state, action);
		case SET_FILTER_QUERY:
			return setFilterQuery(state, action);
		default:
			return state;
	}
}


function tweets(state = { isFetching: false, tweets: [] }, action) {
	switch (action.type) {
		case REQUEST_TWEETS:
			return Immutable
					.fromJS(state)
					.set('isFetching', true)
					.set('tweets', [])
					.toJS();
		case RECEIVE_TWEETS:
			return Immutable
					.fromJS(state)
					.set('isFetching', false)
					.set('tweets', action.tweets)
					.toJS();
		default:
			return state;
	}
}

function tweetsByUser(state = {}, action) {
	switch (action.type) {
		case RECEIVE_TWEETS:
		case REQUEST_TWEETS:
			return tweets(state, action);
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	tweetsByUser,
	tweetOrder,
	filterQuery
});


export default rootReducer;