import { connect } from 'react-redux';
import TweetList from '../components/TweetList';

const mapStateToProps = (state) => {
	return state.tweetsByUser;
}

const VisibleTweetList = connect(mapStateToProps)(TweetList);

export default VisibleTweetList;