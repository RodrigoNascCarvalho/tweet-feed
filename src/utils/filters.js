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
	BY_DATE: (object) => (object.created_at),
	BY_LENGTH: (object) => (object.text.length),
	BY_LIKES: (object) => (object.favorite_count),
	BY_MENTIONS_NUM: (object) => (object.entities.user_mentions.length),
	BY_HASHTAGS_NUM: (object) => (object.entities.hashtags.length),
	BY_MENTIONS: (object) => (object.entities.user_mentions.reduce((previous, obj) => (previous.concat(obj.screen_name)), [])),
	BY_HASHTAGS: (object) => (object.entities.hashtags.reduce((previous, obj) => (previous.concat(obj.text)), []))
};

export const OP_EQUAL = 'OP_EQUAL';
export const OP_NOT_EQUAL = 'OP_NOT_EQUAL';
export const OP_INCLUDES = 'OP_INCLUDES';
export const OP_NOT_INCLUDES = 'OP_NOT_INCLUDES';
export const OP_GREATER_THAN = 'OP_GREATER_THAN';
export const OP_LESS_THAN = 'OP_LESS_THAN';

export const operatorList = [ { value: OP_EQUAL, text: 'Equal To', type: 'num text date'},
							  { value: OP_NOT_EQUAL, text: 'Not Equal To', type: 'num text date' },
							  { value: OP_INCLUDES, text: 'Includes', type: 'text' },
							  { value: OP_NOT_INCLUDES, text: 'Not Includes' , type: 'text' },
							  { value: OP_GREATER_THAN, text: 'Greater Than', type: 'num date' },
							  { value: OP_LESS_THAN, text: 'Less Than', type: 'num date' }];

export const operators = (type, input, operator) => {
	return (value) => {
			//convert query that is a number to num type when making comparisons.
			if (type === 'num') {
				input = +input;
				value = +value;
			}


			
			if (type === 'date') {
				input = new Date(input).getTime();
				value = new Date(new Date(value).toDateString()).getTime();
			}

			if (operator === OP_EQUAL && type !== 'text') {
				return value === input;
			} else if (operator === OP_EQUAL) {
				return value.indexOf(input) > -1;
			}

			if (operator === OP_NOT_EQUAL && type !== 'text') {
				return value !== input;
			} else if (operator === OP_NOT_EQUAL) {
				return value.indexOf(input) === -1;
			}

			if (operator === OP_GREATER_THAN) {
				return value > input;
			}

			if (operator === OP_LESS_THAN) {
				return value < input;
			}

			if (operator === OP_INCLUDES) {
				return value.filter(internalValue => internalValue.indexOf(input) > -1).length;
			}

			if (operator === OP_NOT_INCLUDES) {
				return value.filter(internalValue => internalValue.indexOf(input) > -1).length;
			}
	};
};