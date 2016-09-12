import React from 'react';
import Tweet from './Tweet';
import OrderMenu from './OrderMenu';
import FilterMenu from './FilterMenu';
import { Grid, Row, Col } from 'react-bootstrap';
import './TweetList.css';


const TweetList = ({ isFetching, tweets, error }) => (
	<div className="TweetList-container"> 
	{!tweets &&
        <h2>No tweets available. Please type a new username to see tweets here.</h2>
    }
	{isFetching && tweets && tweets.length === 0 &&
		<div className="loading"><span>Loading...</span></div>
    }
    {!isFetching && !error && tweets && 
        <div>
            <FilterMenu />
            <OrderMenu />
        </div>}
    {!isFetching && tweets && tweets.length === 0  &&
        <h2>There are no tweets to show with this filter. Please change your settings.</h2>
    }
    {!isFetching && !error &&  tweets && tweets.length > 0  &&
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
    {!isFetching && error  &&
        <h2>Error getting user tweets. Check if username was inserted correctly.</h2>
    }
    </div>
);

export default TweetList;