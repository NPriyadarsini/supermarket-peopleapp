/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';

const DisplayCustomerDetail = (customerDetail) => {
	const { id, name, phoneNo, gender } = customerDetail;

	return <div
		key={ id }
		className={ gender === 'male' ? 'grid-item-blue' : 'grid-item-pink' }
	       >
		<div>{name}</div>
		<div>{phoneNo}</div></div>;
};

export default DisplayCustomerDetail;
