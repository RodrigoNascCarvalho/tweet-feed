import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FilterSelectionMapper from '../containers/FilterSelectionMapper';
import OperatorSelectionMapper from '../containers/OperatorSelectionMapper';
import FilterQueryMapper from '../containers/FilterQueryMapper';
import './FilterMenu.css';


import { filterList } from '../utils/filters';
import { operatorList } from '../utils/operators';

const FilterMenu = ({onFilterSelect, onOperatorSelect, onBlur}) => {
	return (
		<div className="FilterMenu-wrapper">
			<Grid>
				<Row>
					<Col xs={10} xsOffset={1} md={2} mdOffset={3}>
					      <FilterSelectionMapper optionList={ filterList } />
					</Col>
					<Col xs={10} xsOffset={1} md={2} mdOffset={0}>
					      <OperatorSelectionMapper optionList={ operatorList } />
					</Col>
					<Col className="FilterMenu-input-group" xs={10} xsOffset={1} md={2} mdOffset={0}>
					      <FilterQueryMapper />
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

export default FilterMenu;