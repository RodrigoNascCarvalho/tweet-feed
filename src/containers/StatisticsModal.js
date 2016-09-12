import { connect } from 'react-redux';
import StaticModal from '../components/StaticModal';


const sumLikes = (tweets) => {
	return tweets.reduce((sum, tweet) => {
		return sum += tweet.favorite_count;
	}, 0);
};

const avgLikes = (sum, size) => {
	return size === 0 ? 0 : sum / size;
};

const generateMentionList = (tweets) => {
	return tweets.reduce((mentionList, tweet) => {
		tweet.entities.user_mentions.forEach((mention) => {
			if (!mentionList[mention.screen_name]) {
				mentionList[mention.screen_name] = 1;
			} else {
				mentionList[mention.screen_name] += 1;	
			}
		});
		return mentionList;
	}, {});
};

const mapStateToProps = (state) => {
	let tweets = state.tweetsByUser.tweets;

	let sumOfLikes = tweets ? sumLikes (tweets) : 0;
	let averageOfLikes = tweets ? avgLikes (sumOfLikes, tweets.length) : 0;
	let mentionList = tweets ? generateMentionList (tweets) : [];

	console.log(mentionList);

	let newState = {
		sumOfLikes: sumOfLikes,
		averageOfLikes: averageOfLikes,
		mentionList: mentionList
	};
	return newState;
};

const StatisticsModal = connect(mapStateToProps)(StaticModal);

export default StatisticsModal;