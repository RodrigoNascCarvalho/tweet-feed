import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';

const FilterSelection = ({onSubmit}) => {
	let input;

	const onSubmitHandler = e => {
		e.preventDefault();
		input = ReactDOM.findDOMNode(input);
		if(!input.value.trim()) {
			return;
		}

		onSubmit(input.value);
	};

	const updateRef = node => {
		input = node;
	};

	return (
		<form onSubmit={ onSubmitHandler }>
			<FormGroup>
	            <InputGroup>
	              <FormControl  ref={ updateRef } 
	              				type="text"
	              				placeholder="Enter filter value..." />
	              <InputGroup.Button>
	                <Button title="Filter" type="submit"><i className="glyphicon glyphicon-filter"></i></Button>
	              </InputGroup.Button>
	            </InputGroup>
          	</FormGroup>
		</form>
    );
};

export default FilterSelection;