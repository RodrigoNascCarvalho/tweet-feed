export const compose  = (fn, ...rest) =>
						  rest.length === 0 ?
						    fn :
						    (...args) => fn(compose(...rest)(...args));

export const BY_DATE = 'BY_DATE';
export const BY_LENGTH = 'BY_LENGTH';
export const BY_LIKES = 'BY_LIKES';
export const BY_MENTIONS_NUM = 'BY_MENTIONS_NUM';
export const BY_HASHTAGS_NUM = 'BY_HASHTAGS_NUM';
export const BY_MENTIONS = 'BY_MENTIONS';
export const BY_HASHTAGS = 'BY_HASHTAGS';

export const filterList = [ { value: BY_DATE, text: 'Date', type: 'date' },
							{ value: BY_LENGTH, text: 'Length', type: 'num' },
							{ value: BY_LIKES, text: 'Likes', type: 'num' },
							{ value: BY_MENTIONS_NUM, text: 'Number of Mentions', type: 'num'},
							{ value: BY_HASHTAGS_NUM, text: 'Number of Hashtags', type: 'num'}, 
							{ value: BY_MENTIONS, text: 'Mentions', type: 'text' },
							{ value: BY_HASHTAGS, text: 'Hashtags', type: 'text' }];

export const filters = {
	BY_DATE: (tweet) => (tweet.created_at),
	BY_LENGTH: (tweet) => (tweet.text.length),
	BY_LIKES: (tweet) => (tweet.favorite_count),
	BY_MENTIONS_NUM: (tweet) => (tweet.entities.user_mentions.length),
	BY_HASHTAGS_NUM: (tweet) => (tweet.entities.hashtags.length),
	BY_MENTIONS: (tweet) => (tweet.entities.user_mentions.reduce((mentionList, mention) => (mentionList.concat(mention.screen_name)), [])),
	BY_HASHTAGS: (tweet) => (tweet.entities.hashtags.reduce((hashtagList, hashtag) => (hashtagList.concat(hashtag.text)), []))
};
