import { connect } from 'react-redux';
import TweetList from '../components/TweetList';

const sortByDate = isAscending => {
	if (isAscending) {
		return ((tweetA, tweetB) => new Date(tweetA.created_at) - new Date(tweetB.created_at));
	}
	return ((tweetA, tweetB) => new Date(tweetB.created_at) - new Date(tweetA.created_at));
}

// guarantee unique order for likes
const sortById = (tweetA, tweetB) => {
	return tweetB.id - tweetA.id;
}

const sortByLikes = isAscending => {
	if (isAscending) {
		return ((tweetA, tweetB) =>  tweetA.favorite_count - tweetB.favorite_count);
	}
	return ((tweetA, tweetB) => tweetB.favorite_count - tweetA.favorite_count);
}


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
}

const mapStateToProps = (state) => {
	return {
		...state, 
		tweets: getVisibleTweets(state.tweetsByUser.tweets, state.tweetOrder)
	};
}

const VisibleTweetList = connect(mapStateToProps)(TweetList);

export default VisibleTweetList;