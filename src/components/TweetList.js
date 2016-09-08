import React from 'react';
import Tweet from './Tweet';
import { Grid, Row, Col } from 'react-bootstrap';
import './TweetList.css';

const TweetList = ({ isFetching, tweets }) => (
	<div className="TweetList-container"> 
	{!tweets &&
          <h2>Please type an username to see tweets here.</h2>
    }
	{isFetching && tweets && tweets.length === 0 &&
          <div className="loading"><span>Loading...</span></div>
    }
    {!isFetching && tweets && tweets.length > 0  &&
	        <Grid>
	            <Row>
	            	<Col xs={12} md={8} mdOffset={2}>
	                	<div className="TweetList-tweets">
	                		{tweets.map((tweet, index) =>
	                			<Tweet key={ index } {...tweet}/>
	                		)}
	            		</div>	
	          		</Col>
	        	</Row>
	      	</Grid>
    }
    </div>
);

export default TweetList;