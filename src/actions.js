import fetch from 'isomorphic-fetch';

export const SEARCH_USER_TWEETS = 'SEARCH_USER_TWEETS';

export function searchUserTweets(user) {
	return {
		type: SEARCH_USER_TWEETS,
		user
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


