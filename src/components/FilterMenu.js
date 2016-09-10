import React from 'react';
import { Row, Col, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
import './FilterMenu.css';

import { filterList, operatorList } from '../utils/filters';

const FilterMenu = ({onFilterSelect, onOperatorSelect, onBlur}) => {
	const onFilterSelectHander = e => {
		console.log(e.target.value);
		currentFilter = e.target.value;
		currentFilterType = filterList[currentFilter];
	};

	const onOperatorSelectHandler = e => {
		console.log(e);
	};

	const onBlurHandler = e => {

	};

	return (
		<form className="FilterMenu-wrapper">
			<FormGroup controlId="formControlsSelect">
				<Row>
					<Col xs={10} xsOffset={1} md={2} mdOffset={3}>
					      <FormControl onChange={ onFilterSelectHander } componentClass="select" placeholder="select">
					        <option value="select">Filter</option>
					        {filterList.map((filter, index) =>
			            		<option key={ index } value={ filter.value }>{ filter.text }</option>
			            	)}
					      </FormControl>
					</Col>
					<Col xs={10} xsOffset={1} md={2} mdOffset={0}>
					      <FormControl onChange={ onOperatorSelectHandler } componentClass="select" placeholder="select">
					        <option value="select">Operator</option>
					        {operatorList.map((operator, index) =>
			            		<option key={ index }
			            				value={ operator.value }>{ operator.text }</option>
			            	)}
					      </FormControl>
					</Col>
					<Col className="FilterMenu-input-group" xs={10} xsOffset={1} md={2} mdOffset={0}>
					      <FormGroup>
				            <InputGroup>
				              <FormControl type="text"
				              				placeholder="Enter filter value..." />
				              <InputGroup.Button>
				                <Button title="Filter"><i className="glyphicon glyphicon-filter"></i></Button>
				              </InputGroup.Button>
				            </InputGroup>
				          </FormGroup>
					</Col>
				</Row>
			</FormGroup>
		</form>
	);
};

export default FilterMenu;