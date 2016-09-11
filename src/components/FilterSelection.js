import React from 'react';
import { FormControl } from 'react-bootstrap';

const FilterSelection = ({optionList, onSelect}) => {
	const onSelectHandler = e => {
		e.preventDefault();
		onSelect(e.target);
	};

	return (
	      <FormControl onChange={ onSelectHandler } defaultValue="select" componentClass="select" placeholder="select">
	        <option value="select" disabled>{ "Filters" }</option>
	        {optionList.map((option, index) =>
	    		<option key={ index } value={ option.value } data-type={ option.type }>{ option.text }</option>
	    	)}
	      </FormControl>
	);
};

export default FilterSelection;