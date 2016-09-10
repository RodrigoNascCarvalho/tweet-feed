import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { searchUserTweets, fetchTweets } from '../actions';
import { FormGroup, FormControl, InputGroup, Button, Row, Col } from 'react-bootstrap';

let TweetSearch = ({dispatch}) => {
	let input;

	const onSubmitHandler = e => {
		e.preventDefault();
		input = ReactDOM.findDOMNode(input);
		if(!input.value.trim()) {
			return;
		}
		dispatch(searchUserTweets(input.value));
		dispatch(fetchTweets(input.value));
		input.value = '';
	};

	const updateRef = node => {
		input = node;
	};

	return (
		<div className="TweetSearch-container">
		  <Row>
		    <Col xs={12} md={6} mdOffset={3}>
		        <h2> Tweet Feed </h2>
		        <form onSubmit={ onSubmitHandler }>
		          <FormGroup>
		            <InputGroup>
		              <FormControl  ref={ updateRef } 
					        		type="text" 
					        		placeholder="Enter Twitter username..." />
		              <InputGroup.Button>
		                <Button type="submit">Get Tweets</Button>
		              </InputGroup.Button>
		            </InputGroup>
		          </FormGroup>
		        </form>
		    </Col>
		  </Row>
		</div>
	)
};

TweetSearch = connect()(TweetSearch);

export default TweetSearch;