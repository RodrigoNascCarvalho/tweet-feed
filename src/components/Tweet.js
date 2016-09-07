import React from 'react';
import { Image } from 'react-bootstrap';
import './Tweet.css';

const Tweet = () => (
	<section className="Tweet-container">
	    <div className="Tweet-image">
	      <Image src="http://pbs.twimg.com/profile_images/719699602644058113/v1PZjNNr_normal.jpg" responsive/>
	    </div>
	    <div className="Tweet-content">
	      <div className="Tweet-user">
	        <span>Aberração Cromática</span>
	        <a href="http://google.com" target="_blank">@Otherspacing</a>
	        <div className="Tweet-info">
	          <span><i className="glyphicon glyphicon-heart"></i> 1</span>
	          <span>- May 1</span>
	        </div>
	      </div>
	      <p className="Tweet-text">
	        Trocando de avatar depois de uns meses. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. Hahahahah.
	      </p>
	    </div>
  	</section>
);

export default Tweet;