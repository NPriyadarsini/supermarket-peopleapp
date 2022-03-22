import { React } from 'react';

const PhoneNoTextBox = (context) => {
	const { state } = context;

	return (
		<label>Customer Mobile No:{}
			<input
				id="input"
				type="text"
				value={ state.phoneNo }
				onChange={ (evt) =>
					context.actions.setCustomerPhoneNo(evt.target.value) }
			/>
		</label>);
};

export default PhoneNoTextBox;
