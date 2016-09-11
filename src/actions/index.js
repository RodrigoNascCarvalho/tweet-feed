import fetch from 'isomorphic-fetch';

export const SET_TWEET_ORDER = 'SET_TWEET_ORDER';

export function setTweetOrder (order, isAscending) {
	return {
		type: SET_TWEET_ORDER,
		isAscending,
		order
	}
}

export const SET_FILTER = 'SET_FILTER';

export function setTweetFilter (filter, filterType) {
	return {
		type: SET_FILTER,
		filter,
		filterType
	}
}

export const SET_OPERATOR = 'SET_OPERATOR';

export function setTweetOperator (operator) {
	return {
		type: SET_OPERATOR,
		operator
	}
}

export const SET_FILTER_QUERY = 'SET_FILTER_QUERY';

export function triggerFilter (query) {
	return {
		type: SET_FILTER_QUERY,
		query
	}
}

export const REQUEST_TWEETS = 'REQUEST_TWEETS';

export function requestTweets(user) {
	return {
		type: REQUEST_TWEETS,
		user
	}
}

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export function receiveTweets(user, tweetArray) {
	return {
		type: RECEIVE_TWEETS,
		tweets: tweetArray,
		user
	}
}

export function fetchTweets(user) {
	return function (dispatch) {
		dispatch(requestTweets(user));

		return fetch(`http://localhost:4000/api/tweets/${user}`)
			.then(res => res.json())
			.then(json => {
				dispatch(receiveTweets(user, json));
			});
	}
}


