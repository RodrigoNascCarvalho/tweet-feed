import React from 'react';
import { FormControl } from 'react-bootstrap';

const OperatorSelection = ({optionList, filterOption, onSelect}) => {
	const onSelectHandler = e => {
		e.preventDefault();
		onSelect(e.target);
	};

	return (
	      <FormControl onChange={ onSelectHandler } defaultValue="select" disabled={ !filterOption } componentClass="select" placeholder="select">
	        <option value="select" disabled>{ "Operators" }</option>
	        {optionList.map((option, index) =>
	    		<option key={ index } value={ option.value } disabled={ (option.type.indexOf(filterOption) === -1 )}>{ option.text }</option>
	    	)}
	      </FormControl>
	);
};

export default OperatorSelection;