import { combineReducers } from 'redux';
import {
	SEARCH_USER_TWEETS,
	REQUEST_TWEETS,
	RECEIVE_TWEETS
} from './actions';
import Immutable from 'immutable';


function searchedUsername(state = 'Otherspacing', action) {
	switch (action.type) {
		case SEARCH_USER_TWEETS:
			return action.user;
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
			return Immutable
					.fromJS(state)
					.set('tweets', tweets(state[action.user], action))
					.toJS();
		default:
			return state;
	}
}

function 

const rootReducer = combineReducers({
	tweetsByUser,
	searchedUsername
});


export default rootReducer;