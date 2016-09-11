import { connect } from 'react-redux';
import { compose, filters } from '../utils/filters';
import { operators } from '../utils/operators'
import TweetList from '../components/TweetList';

const sortByDate = isAscending => {
	if (isAscending) {
		return ((tweetA, tweetB) => new Date(tweetA.created_at) - new Date(tweetB.created_at));
	}
	return ((tweetA, tweetB) => new Date(tweetB.created_at) - new Date(tweetA.created_at));
};

// guarantee unique order for likes
const sortById = (tweetA, tweetB) => {
	return tweetB.id - tweetA.id;
};

const sortByLikes = isAscending => {
	if (isAscending) {
		return ((tweetA, tweetB) =>  tweetA.favorite_count - tweetB.favorite_count);
	}
	return ((tweetA, tweetB) => tweetB.favorite_count - tweetA.favorite_count);
};


const getVisibleTweets = (tweets, tweetOrder) => {
	let isAscending = tweetOrder.isAscending;

	if (!tweets) {
		return tweets;
	}

	switch (tweetOrder.order) {
		case 'BY_DATE':
			return tweets.sort(sortByDate(isAscending));
		case 'BY_LIKES':
			return tweets.sort(sortById).sort(sortByLikes(isAscending));
		default:
			return tweets;
  }
};

const filterTweets = (tweets, filterQuery) => {
	let filter = filterQuery.filter;
	let filterType = filterQuery.filterType;

	let operator = filterQuery.operator;
	let query = filterQuery.query;

	if (!filters[filter] || !operator || !query) {
		return tweets;
	}

	let filterFunction = compose(operators(filterType, query, operator), filters[filter]);
	
	return tweets.filter(filterFunction);
};

const mapStateToProps = (state) => {
	let orderedTweetState = getVisibleTweets(state.tweetsByUser.tweets, state.tweetOrder);
	let filteredTweetState = filterTweets(orderedTweetState, state.filterQuery);

	let newState = {
		isFetching: state.tweetsByUser.isFetching,
		tweets: filteredTweetState ? filteredTweetState.slice() : filteredTweetState
	};

	return newState;
};

const VisibleTweetList = connect(mapStateToProps)(TweetList);

export default VisibleTweetList;