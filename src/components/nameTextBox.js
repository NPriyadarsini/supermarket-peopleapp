
import { React } from 'react';
import context from '../core/context';

const NameTextBox = () =>
	<label>Customer Name:{}
		<input
			id="input"
			type="text"
			value={ context.state.name }
			onChange={ (evt) =>
				context.actions.setCustomerName(evt.target.value) }
		/>
	</label>;

export default NameTextBox;
