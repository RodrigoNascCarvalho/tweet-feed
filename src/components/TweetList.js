import React from 'react';
import Tweet from './Tweet';
import { Row, Col } from 'react-bootstrap';
import './TweetList.css';


const TweetList = ({ isFetching, tweets }) => (
	<div className="TweetList-container"> 
	{!tweets &&
        <h2>No tweets available. Please type a new username to see tweets here.</h2>
    }
	{isFetching && tweets && tweets.length === 0 &&
		<div className="loading"><span>Loading...</span></div>
    }
    {!isFetching && tweets && tweets.length > 0  &&
        <Row>
        	<Col xs={12} md={8} mdOffset={2}>
            	<div className="TweetList-tweets">
            		{tweets.map((tweet, index) =>
            			<Tweet key={ index } {...tweet}/>
            		)}
        		</div>
      		</Col>
    	</Row>
    }
    </div>
);

export default TweetList;