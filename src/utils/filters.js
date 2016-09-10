export const pipe = (fn,...fns) => (...args) => !fns.length ? fn(...args) : pipe(...fns)(fn(...args));

export const BY_DATE = 'BY_DATE';
export const BY_LENGTH = 'BY_LENGTH';
export const BY_LIKES = 'BY_LIKES';
export const BY_MENTIONS_NUM = 'BY_MENTIONS_NUM';
export const BY_HASHTAGS_NUM = 'BY_HASHTAGS_NUM';
export const BY_MENTIONS = 'BY_MENTIONS';
export const BY_HASHTAGS = 'BY_HASHTAGS';

export const filterList = [ { value: BY_DATE, text: 'Date', type: 'num' },
							{ value: BY_LENGTH, text: 'Length', type: 'num' },
							{ value: BY_LIKES, text: 'Likes', type: 'num' },
							{ value: BY_MENTIONS_NUM, text: 'Number of Mentions', type: 'num'},
							{ value: BY_HASHTAGS_NUM, text: 'Number of Hashtags', type: 'num'}, 
							{ value: BY_MENTIONS, text: 'Mentions', type: 'text' },
							{ value: BY_HASHTAGS, text: 'Hashtags', type: 'text' }];

export const filters = {
	BY_DATE: (object) => (object.date),
	BY_LENGTH: (object) => (object.text.length),
	BY_LIKES: (object) => (object.favorite_count),
	BY_MENTIONS_NUM: (object) => (object.entities.user_mentions.length),
	BY_HASHTAGS_NUM: (object) => (object.entities.hashtags.length),
	BY_MENTIONS: (object) => (object.entities.user_mentions),
	BY_HASHTAGS: (object) => (object.entities.hashtags)
};

export const OP_EQUAL = 'OP_EQUAL';
export const OP_NOT_EQUAL = 'OP_NOT_EQUAL';
export const OP_INCLUDES = 'OP_INCLUDES';
export const OP_NOT_INCLUDES = 'OP_NOT_INCLUDES';
export const OP_GREATER_THAN = 'OP_GREATER_THAN';
export const OP_LESS_THAN = 'OP_LESS_THAN';

export const operatorList = [ { value: OP_EQUAL, text: 'Equal To', type: 'num text'},
							  { value: OP_NOT_EQUAL, text: 'Not Equal To', type: 'num text' },
							  { value: OP_INCLUDES, text: 'Includes', type: 'text' },
							  { value: OP_NOT_INCLUDES, text: 'Not Includes' , type: 'text' },
							  { value: OP_GREATER_THAN, text: 'Greater Than', type: 'num' },
							  { value: OP_LESS_THAN, text: 'Less Than', type: 'num' }];

export const operators = (input) => {
	return {
		OP_EQUAL: (value) => (value === input),
		OP_NOT_EQUAL: (value) => (value !== input),
		OP_GREATER_THAN: (value) => (value > input),
		OP_LESS_THAN: (value) => (value < input),
		OP_INCLUDES: (value) => (value.indexOf(input) > 0),
		OP_NOT_INCLUDES: (value) => (value.indexOf(input) === -1)
	}
};