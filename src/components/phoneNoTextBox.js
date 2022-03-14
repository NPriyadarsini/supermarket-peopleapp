import { React } from 'react';
import context from '../core/context';

const PhoneNoTextBox = () =>
	<label>Customer Mobile No:{}
		<input
			id="input"
			type="text"
			value={ context.state.phoneNo }
			onChange={ (evt) =>
				context.actions.setCustomerPhoneNo(evt.target.value) }
		/>
	</label>;

export default PhoneNoTextBox;
