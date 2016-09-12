import React from 'react';
import { Grid, Row, Col, ButtonToolbar } from 'react-bootstrap';
import OrderGroupMapper from './../containers/OrderGroupMapper';
import StatisticsModal from '../containers/StatisticsModal';
import './OrderMenu.css';

const OrderMenu = () => (
	<Grid>
		<Row>
			<Col xs={12} md={8} mdOffset={2}>
				<div className="OrderMenu-wrapper">
					<ButtonToolbar>
					    <OrderGroupMapper name="Date" order="BY_DATE" isAscending={false}/>
					    <OrderGroupMapper name="Stars" order="BY_LIKES" isAscending={false}/>
					    <StatisticsModal />
					</ButtonToolbar>
				</div>
			</Col>
		</Row>
	</Grid>
);

export default OrderMenu;