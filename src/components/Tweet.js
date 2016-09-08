import React, { PropTypes } from 'react';
import { Image } from 'react-bootstrap';
import './Tweet.css';

const toDateString = date => {
	return new Date(date).toDateString();
};

const Tweet = ({ text, user, favorite_count, created_at}) => (
	<section className="Tweet-container">
	    <div className="Tweet-image">
	      <Image src={ user.profile_image_url } responsive/>
	    </div>
	    <div className="Tweet-content">
	      <div className="Tweet-user">
	        <span>{ user.name }</span>
	        <a href={ `https://twitter.com/${ user.screen_name }` } target="_blank">@{ user.screen_name }</a>
	        <div className="Tweet-info">
	        	<span>{ toDateString(created_at) }</span>
	          	<span><i className="glyphicon glyphicon-heart"></i> { favorite_count }</span>
	          
	        </div>
	      </div>
	      <p className="Tweet-text">
	      	{text}
	      </p>
	    </div>
  	</section>
);

Tweet.propTypes = {
	text: PropTypes.string.isRequired,
	user: PropTypes.object.isRequired,
	favorite_count: PropTypes.number.isRequired,
	created_at: PropTypes.string.isRequired
};

export default Tweet;