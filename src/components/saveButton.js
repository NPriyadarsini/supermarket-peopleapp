import { React } from 'react';

const SaveButton = (context) =>
	<button onClick={ () => context.actions.addCustomer() }>
		Save
	</button>;

export default SaveButton;
