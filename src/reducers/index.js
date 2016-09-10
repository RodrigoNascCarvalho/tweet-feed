import { combineReducers } from 'redux';
import {
	SEARCH_USER_TWEETS,
	SET_TWEET_ORDER,
	REQUEST_TWEETS,
	RECEIVE_TWEETS
} from '../actions';
import Immutable from 'immutable';


function searchedUsername(state = {}, action) {
	switch (action.type) {
		case SEARCH_USER_TWEETS:
			return action.user;
		default:
			return state;
	}
}

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

function tweets(state = { isFetching: false, tweets: [] }, action) {
	switch (action.type) {
		case REQUEST_TWEETS:
			return Immutable
					.fromJS(state)
					.set('isFetching', true)
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
	searchedUsername,
	tweetOrder
});


export default rootReducer;