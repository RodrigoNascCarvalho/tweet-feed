import React from 'react';
import { FormGroup, FormControl, InputGroup, Button, Row, Col } from 'react-bootstrap';
import './TweetSearch.css';

const TweetSearch = () => (
	<div className="TweetSearch-container">
	  <Row>
	    <Col xs={12} md={6} mdOffset={3}>
	        <h2> Tweet Feed </h2>
	        <form>
	          <FormGroup>
	            <InputGroup>
	              <FormControl type="text" placeholder="Enter Twitter username..." />
	              <InputGroup.Button>
	                <Button>Get Tweets</Button>
	              </InputGroup.Button>
	            </InputGroup>
	          </FormGroup>
	        </form>
	    </Col>
	  </Row>
	</div>
);

export default TweetSearch;