import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';


const OrderGroup = ({name, onAscendingClick, onDescendingClick}) => {
	const onAscendingClickHandler = e => {
		e.preventDefault();
		onAscendingClick();
	};

	const onDescendingClickHandler = e => {
		e.preventDefault();
		onDescendingClick();
	};

	return (<ButtonGroup>
	  <Button onClick={ onAscendingClickHandler }>
	  	<i className="glyphicon glyphicon-chevron-up"></i> {'ASC'}
	  </Button>
	  <Button onClick={ onDescendingClickHandler }>
	  	<i className="glyphicon glyphicon-chevron-down"></i> {'DESC'}
	  </Button>
	  <Button className="Menu-disabled" disabled>{ name }</Button>
	</ButtonGroup>);
};

export default OrderGroup;