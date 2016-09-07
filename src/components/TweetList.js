import React from 'react';
import Tweet from './Tweet';
import { Grid, Row, Col } from 'react-bootstrap';
import './TweetList.css';

const TweetList = () => (
	<div className="App-tweets">
        <Grid>
            <Row>
            	<Col xs={12} md={8} mdOffset={2}>
                	<div className="Tweet-list">
                  		<Tweet/>
                  		<Tweet/>
                  		<Tweet/>
                  		<Tweet/>
                  		<Tweet/>
                  		<Tweet/>
            		</div>
          		</Col>
        	</Row>
      	</Grid>
    </div>
);

export default TweetList;