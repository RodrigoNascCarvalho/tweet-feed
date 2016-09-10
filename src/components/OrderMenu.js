import React from 'react';
import { Row, Col, ButtonToolbar } from 'react-bootstrap';
import OrderGroupMapper from './../containers/OrderGroupMapper';
import './OrderMenu.css';

const OrderMenu = () => (
	<Row>
		<Col xs={12} md={6} mdOffset={3}>
			<div className="OrderMenu-wrapper">
				<ButtonToolbar>
				    <OrderGroupMapper name="Date" order="BY_DATE" isAscending={false}/>
				    <OrderGroupMapper name="Stars" order="BY_LIKES" isAscending={false}/>
				</ButtonToolbar>
			</div>
		</Col>
	</Row>
	
);

export default OrderMenu;