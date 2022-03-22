
import { React } from 'react';

const NameTextBox = (context) => {
	const { state } = context;

	return (
		<label>Customer Name:{}
			<input
				id="input"
				type="text"
				value={ state.name }
				onChange={ (evt) =>
					context.actions.setCustomerName(evt.target.value) }
			/>
		</label>);
};

export default NameTextBox;
